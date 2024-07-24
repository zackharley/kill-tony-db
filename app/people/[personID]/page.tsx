import { Box, Container, Typography } from '@mui/material';
import prisma from '@/lib/prisma';
import { orderBy } from 'lodash-es';
import Appearance from '@/components/appearance';
import Image from 'next/image';

export default async function PersonPage({
  params: { personID },
}: {
  params: { personID: string };
}) {
  const person = await prisma.person.findUnique({
    where: {
      id: parseInt(personID),
    },
    include: {
      appearances: {
        include: {
          episode: true,
        },
      },
    },
  });

  // order appearances by recording date (desc)
  const orderedAppearances = orderBy(
    person?.appearances,
    'episode.recordingDate',
    'desc',
  );
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box>
          <Image
            src={`/headshots/${person?.name
              .replace(/\s/, '-')
              .toLowerCase()}.webp`}
            alt={`${person?.name} headshot`}
            width={600}
            height={600}
          />
        </Box>
        <Box>
          <Typography component="h1" variant="h3">
            {person?.name}
          </Typography>
          <ul>
            {orderedAppearances.map((appearance) => (
              <Appearance key={appearance.id} appearance={appearance} />
            ))}
          </ul>
        </Box>
      </Box>
    </Container>
  );
}
