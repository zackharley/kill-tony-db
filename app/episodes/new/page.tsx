import NewEpisodeForm from '@/components/new-episode-form';
import { Container, Typography } from '@mui/material';
import prisma from '@/lib/prisma';

export default async function NewEpisodePage() {
  const locations = await prisma.location.findMany({});
  const people = await prisma.person.findMany({ orderBy: { name: 'asc' } });
  return (
    <Container>
      <Typography variant="h3" component="h1">
        New Episode
      </Typography>
      <NewEpisodeForm locations={locations} people={people} />
    </Container>
  );
}
