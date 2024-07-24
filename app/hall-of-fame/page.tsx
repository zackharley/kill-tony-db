import { Typography } from '@mui/material';
import prisma from '@/lib/prisma';

export default async function HallOfFamePage() {
  const hallOfFamers = await prisma.person.findMany({
    where: {
      isHallofFameMember: true,
    },
  });
  return (
    <main>
      <Typography component="h1" variant="h3">
        Hall of Fame
      </Typography>
      <ul>
        {hallOfFamers.map((person) => {
          return (
            <li key={person.id}>
              <Typography component="h2" variant="h4">
                {person.name}
              </Typography>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
