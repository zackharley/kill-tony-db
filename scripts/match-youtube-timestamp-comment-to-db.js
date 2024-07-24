import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';
import { orderBy } from 'lodash-es';
import fs from 'fs';

const prisma = global.prisma || new PrismaClient();

const completedEpisodeIds = [640, 642, 643, 644, 645, 647, 648, 649, 650];
// 649

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

async function get(videoId) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&pageToken=&order=orderUnspecified&maxResults=100&searchTerms=william%201&textFormat=plainText&key=AIzaSyDL6OpFNR4AOFI6z-wgfTqjXBED1VxT_44`,
    {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.7',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Brave";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'sec-gpc': '1',
        Referer: 'https://ytcomment.kmcat.uk/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: null,
      method: 'GET',
    },
  );
  return (await response.json()).items;
}

const regulars = await prisma.person.findMany({
  where: {
    appearances: {
      some: {
        type: 'regular',
      },
    },
  },
});
const people = await prisma.person.findMany({});
const isRegular = (person) => !!regulars.find((p) => p.id === person.id);

(async function main() {
  const episodes = await prisma.episode.findMany({
    include: {
      appearances: true,
    },
    where: {
      id: {
        gt: 650,
        // lt: 649,
      },
    },
    orderBy: {
      id: 'asc',
    },
  });
  const results = await asyncSeries(episodes, async (episode) => {
    const appearances = await getAppearanceDetails(episode);
    return {
      episodeId: episode.id,
      appearances,
    };
  });
  fs.writeFileSync(
    './appearances.json',
    JSON.stringify(results, null, 2),
    'utf8',
  );
})();

const asyncSeries = async (array, callback) =>
  array.reduce(
    (promise, item) =>
      promise.then((result) => callback(item).then((res) => [...result, res])),
    Promise.resolve([]),
  );

async function getAppearanceDetails(episode) {
  const guestIds = episode.appearances
    .filter((a) => a.type === 'guest')
    .map((a) => a.personId);
  const videoId = episode.youtubeUrl.split('v=')[1];
  const comments = await get(videoId);
  const comment = orderBy(
    comments.filter(
      (c) =>
        c.snippet.topLevelComment.snippet.authorDisplayName === '@DeLoopGaroux',
    ),
    'c.snippet.topLevelComment.snippet.likeCount',
    'desc',
  )[0];
  if (!comment) {
    console.warn('no comment', episode.id);
    return;
  }
  const text = comment.snippet.topLevelComment.snippet.textDisplay;
  const results = text
    .split('\n')
    .map((line) => {
      const regex = /(?<name>.*) (?<timestamp>[\d:]+)/;
      const match = line.match(regex);
      if (!match) {
        console.warn('no match', line);
        return null;
      }
      const { name, timestamp } = match.groups;
      const person = people.find((p) => p.name === name);
      const seconds = timestamp
        .split(':')
        .reduce((acc, time) => acc * 60 + +time, 0);
      return {
        personId: person?.id,
        seconds,
        name,
        youtubeUrlWithTimestamp: `https://youtu.be/${videoId}?t=${seconds}`,
      };
    })
    .filter((r) => (r?.personId ? guestIds.indexOf(r?.personId) === -1 : true))
    .filter(
      (r) =>
        !r?.name.includes('Kill Tony Band') &&
        !r?.name.includes('Tony lays down the law') &&
        !r?.name.includes('Steve-O and Adrienne') &&
        !r?.name.includes('Ari flashes Johnathon') &&
        !r?.name.includes('Ari Shaffir and Mark Normand') &&
        !r?.name.includes('Duncan Trussell and Lil Hobo'),
    );
  return results;
}

// const episodeId = 650;
// const comment = `Hans Kim 7:18
// Austin Young 16:24
// Hank Garza 32:40
// Tim Harris 39:18
// Ivory Jones 49:01
// Kam Patterson 58:48
// Uncle Lazer 1:04:40
// Spencer Franco 1:19:44
// Lexi Esposito 1:29:32
// Busco Jones 1:37:55
// William Montgomery 1:47:22`;

// const results = await Promise.all(
//   comment.split('\n').map(async (line) => {
//     const regex = /(?<name>.*) (?<timestamp>[\d:]+)/;
//     const match = line.match(regex);
//     if (!match) {
//       console.warn('no match', line);
//       return null;
//     }
//     const { name, timestamp } = match.groups;
//     const person = people.find((p) => p.name === name);
//     const seconds = timestamp
//       .split(':')
//       .reduce((acc, time) => acc * 60 + +time, 0);
//     if (!person) {
//       const response = await prisma.person.create({
//         data: {
//           name,
//           appearances: {
//             create: {
//               type: 'bucket_pull',
//               episodeId,
//               youtubeTimestamp: seconds,
//             },
//           },
//         },
//       });
//       console.log('CREATE PERSON', response);
//       return;
//     }
//     const appearance = await prisma.appearance.findFirst({
//       where: {
//         personId: person.id,
//         episodeId,
//       },
//     });
//     if (!appearance) {
//       const response = await prisma.appearance.create({
//         data: {
//           type: isRegular(person) ? 'regular' : 'bucket_pull',
//           episodeId,
//           youtubeTimestamp: seconds,
//           personId: person.id,
//         },
//       });
//       console.log('CREATE APPEARANCE', response);
//       return;
//     }
//     const response = await prisma.appearance.update({
//       where: {
//         id: appearance.id,
//       },
//       data: {
//         youtubeTimestamp: seconds,
//       },
//     });
//     console.log('UPDATE APPEARANCE', response);
//     return {
//       appearanceId: appearance?.id,
//       personId: person?.id,
//       name,
//       seconds,
//     };
//   }),
// );
// console.log(results);
