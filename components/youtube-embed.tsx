export default function YoutTubeEmbed({
  startTimestamp,
  youtubeURL,
}: {
  startTimestamp?: number | null;
  youtubeURL: string;
}) {
  if (!youtubeURL) return null;
  const urlParams = new URLSearchParams(new URL(youtubeURL).search);
  const videoID = urlParams.get('v');
  console.log({ startTimestamp, youtubeURL });
  return (
    <iframe
      // width="853"
      // height="480"
      height="300"
      width="533"
      src={`https://www.youtube.com/embed/${videoID}${
        startTimestamp ? `?start=${startTimestamp}` : ''
      }`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}
