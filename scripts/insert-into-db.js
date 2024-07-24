import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';

const prisma = new PrismaClient();

async function main() {
  // Read the JSON file
  const data = JSON.parse(
    readFileSync('kill-tony-episodes-prisma.json', 'utf8'),
  ).map((episode) => ({
    episode: {
      title: episode.data.title,
      recordingDate: new Date(episode.data.recordingDate),
    },
    appearances: episode.data.appearances,
  }));
  // Define the data for episodes and associated appearances and persons
  // const data = [
  //   {
  //     episode: {
  //       title: 'Episode 1',
  //       airDate: new Date('2024-01-01'),
  //       recordingDate: new Date('2023-12-25'),
  //     },
  //     appearances: [
  //       {
  //         person: { name: 'John Doe', bio: 'Musician' },
  //         type: 'guest',
  //       },
  //       // ...more appearances for this episode
  //     ],
  //   },
  //   // ...more episodes with their appearances
  // ];

  let personMap = {}; // Map for person names to their IDs

  // Ensure all persons are created or fetched
  for (const item of data) {
    for (const appearance of item.appearances) {
      const personName = appearance.person.name;
      if (!personMap[personName]) {
        let person = await prisma.person.findFirst({
          where: { name: personName },
        });

        if (!person) {
          person = await prisma.person.create({
            data: appearance.person,
          });
        }

        personMap[personName] = person.id;
      }
    }
  }

  // Create episodes with appearances
  for (const item of data) {
    const { episode, appearances } = item;

    await prisma.episode.create({
      data: {
        ...episode,
        appearances: {
          create: appearances.map((appearance) => ({
            type: appearance.type,
            personId: personMap[appearance.person.name], // Use the person's ID
          })),
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
