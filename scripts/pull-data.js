const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const baseURL = 'https://www.deathsquad.tv/category/kill-tony/page/';
const startPage = 1;
const endPage = 65;
const urls = [];

async function scrapePage(pageNumber) {
  try {
    const response = await axios.get(`${baseURL}${pageNumber}`);
    const $ = cheerio.load(response.data);

    $('div.post-content > h2 > a').each((i, element) => {
      const url = $(element).attr('href');
      urls.push(url);
    });
  } catch (error) {
    console.error(`Error scraping page ${pageNumber}: `, error);
  }
}

async function scrapeAllPages() {
  for (let i = startPage; i <= endPage; i++) {
    await scrapePage(i);
    console.log(`Scraped page ${i}`);
  }

  // Saving to CSV
  const csvContent = urls
    .reverse()
    .map((url, index) => `${index + 1},${url}`)
    .join('\n');
  fs.writeFileSync('kill-tony-episodes.csv', csvContent);
  console.log('Scraped data saved to kill-tony-episodes.csv');
}

scrapeAllPages();
