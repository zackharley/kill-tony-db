import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = global.prisma || new PrismaClient();

const regulars = await prisma.person.findMany({
  where: {
    appearances: {
      some: {
        type: 'regular',
      },
    },
  },
});
const isRegular = (person) => !!regulars.find((p) => p.id === person.id);

const data = JSON.parse(fs.readFileSync('./appearances.json'));

await Promise.all(
  data.map(async (d) => {
    const { episodeId, appearances } = d;
    if (!appearances) {
      return;
    }
    return await Promise.all(
      appearances.map(async (a) => {
        const person = await prisma.person.findFirst({
          where: {
            OR: [...(a.personId ? [{ id: a.personId }] : []), { name: a.name }],
          },
        });
        if (!person) {
          const response = await prisma.person.create({
            data: {
              name: a.name,
              appearances: {
                create: {
                  type: a.type ?? 'bucket_pull',
                  episodeId,
                  youtubeTimestamp: a.seconds,
                  ...(a.isStandupDebut && { isStandupDebut: true }),
                },
              },
            },
          });
          console.log('CREATE PERSON', response);
          return;
        }
        const appearance = await prisma.appearance.findFirst({
          where: {
            personId: person.id,
            episodeId,
          },
        });
        if (!appearance) {
          const response = await prisma.appearance.create({
            data: {
              type: a.type ?? isRegular(person) ? 'regular' : 'bucket_pull',
              episodeId,
              youtubeTimestamp: a.seconds,
              personId: person.id,
              ...(a.isStandupDebut && { isStandupDebut: true }),
            },
          });
          console.log('CREATE APPEARANCE', response);
          return;
        }
        const response = await prisma.appearance.update({
          where: {
            id: appearance.id,
          },
          data: {
            youtubeTimestamp: a.seconds,
            ...(a.isStandupDebut && { isStandupDebut: true }),
          },
        });
        console.log('UPDATE APPEARANCE', response);
      }),
    );
  }),
);
