import YoutTubeEmbed from '@/components/youtube-embed';
import prisma from '@/lib/prisma';
import { Link, Typography } from '@mui/material';

export default async function EpisodePage({
  params: { episodeID },
}: {
  params: { episodeID: string };
}) {
  const episode = await prisma.episode.findUnique({
    where: {
      id: parseInt(episodeID),
    },
    include: {
      appearances: {
        include: {
          person: true,
          episode: true,
        },
      },
    },
  });
  return (
    <div>
      <Typography component="h1" variant="h3">
        {episode?.title}
      </Typography>
      {episode?.recordingDate && (
        <Typography component="p" variant="body1" color="gray[300]">
          {new Date(episode.recordingDate).toLocaleDateString()}
        </Typography>
      )}
      {episode?.youtubeUrl && <YoutTubeEmbed youtubeURL={episode.youtubeUrl} />}
      <Typography component="h2" variant="h4">
        Appearances
      </Typography>
      <ul>
        {episode?.appearances?.map((appearance) => {
          return (
            <li key={appearance.id}>
              <Link href={`/people/${appearance.personId}`}>
                {appearance.person.name} ({appearance.type})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
