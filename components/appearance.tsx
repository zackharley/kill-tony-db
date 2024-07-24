'use client';

import { Button, Link } from '@mui/material';
import { useState } from 'react';
import YoutTubeEmbed from './youtube-embed';

export default function Appearance({ appearance }: { appearance: any }) {
  const [showYouTube, setShowYouTube] = useState(false);
  return (
    <li key={appearance.id}>
      <Button variant="outlined" onClick={() => setShowYouTube(!showYouTube)}>
        {showYouTube ? 'Hide' : 'Show'} YouTube
      </Button>
      {showYouTube && appearance.episode.youtubeUrl && (
        <YoutTubeEmbed
          youtubeURL={appearance.episode.youtubeUrl}
          startTimestamp={appearance.youtubeTimestamp}
        />
      )}
      <Link href={`/episodes/${appearance.episodeId}`}>
        {appearance.episode.title} ({appearance.type})
      </Link>
    </li>
  );
}
