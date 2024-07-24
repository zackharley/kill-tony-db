import prisma from '@/lib/prisma';
import { Link } from '@mui/material';

export default async function Episodes() {
  const episodes = await prisma.episode.findMany({
    orderBy: {
      recordingDate: 'desc',
    },
  });

  return (
    <div>
      <h1>Episodes</h1>
      {episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <Link href={`/episodes/${episode.id}`}>{episode.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
