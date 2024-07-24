const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const readUrlsFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n');
  } catch (error) {
    console.error(`Error reading file ${filePath}: `, error);
    return [];
  }
};

const episodeUrls = readUrlsFromFile('kill-tony-episodes.csv');

const extractRecordingDate = (text) => {
  const regex = /\d{2}\/\d{2}\/\d{4}/;
  const match = text.match(regex);
  return match ? new Date(match[0]).toISOString() : null;
};

const properNameCasing = (name) => {
  return name
    .replace(/\b(\w)/g, (s) => s.toUpperCase())
    .replace(
      /\b(\w+)\b/g,
      (s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase(),
    );
};

const excludedGuests = [
  'Joe White',
  'Kristie Nova',
  'Yoni',
  'Kino Loasis',
  'Kill Tony Mania',
];
const hosts = ['Tony Hinchcliffe', 'Brian Redban'].map(properNameCasing);
const regulars = [
  'Hans Kim',
  'Kam Patterson',
  'William Montgomery',
  'David Lucas',
  'Michael Lehrer',
  'Malcolm Hatchett',
  'Sara Weinshenk',
  'Ali Macofsky',
  'Vanessa Johnston',
  'Melissa Ehslinger',
  'Sara Mostajabi',
  'Kimberly Congdon',
].map(properNameCasing);
const bandMembers = [
  'Paul Deemer',
  'D Madness',
  'Michael A. Gonzales',
  'Jon Deas',
  'Matthew Muehling',
  'Pat Regan',
  'Jeremiah Watkins',
  'Joel Jimenez',
  'Chris Dillon',
  'Jessie Johnson',
].map(properNameCasing);

async function scrapeEpisodeDetails(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $('h1 > a').text().trim();
    const recordingDateString = $('.entry-content').text();
    const recordingDate = extractRecordingDate(recordingDateString);

    const guests = [];
    $('div.section.tags > a').each((i, element) => {
      let guestName = properNameCasing($(element).text().trim());

      if (!excludedGuests.includes(guestName)) {
        guests.push(guestName);
      }
    });

    return { title, recordingDate, guests };
  } catch (error) {
    console.error(`Error scraping URL ${url}: `, error);
    return null;
  }
}

function getAppearanceType(name) {
  if (hosts.includes(name)) return 'host';
  if (regulars.includes(name)) return 'regular';
  if (bandMembers.includes(name)) return 'band';
  return 'guest';
}

async function scrapeAllEpisodes() {
  const episodes = [];

  for (const url of episodeUrls) {
    const episodeDetails = await scrapeEpisodeDetails(url);

    if (episodeDetails) {
      const appearances = episodeDetails.guests.map((guest) => ({
        person: { name: guest },
        type: getAppearanceType(guest),
      }));

      // Remove duplicate appearances
      const uniqueAppearances = Array.from(
        new Set(appearances.map((a) => a.person.name)),
      ).map((name) => {
        return appearances.find((a) => a.person.name === name);
      });

      episodes.push({
        data: {
          title: episodeDetails.title,
          recordingDate: episodeDetails.recordingDate,
          appearances: uniqueAppearances,
        },
      });
    }

    console.log(`Scraped episode from ${url}`);
  }

  const jsonContent = JSON.stringify(episodes, null, 2);
  fs.writeFileSync('kill-tony-episodes-prisma.json', jsonContent);
  console.log('Scraped episodes saved to kill-tony-episodes-prisma.json');
}

scrapeAllEpisodes();
