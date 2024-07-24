import { Link, TextField } from '@mui/material';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Link href="/people">People</Link>
      <Link href="/episodes">Episodes</Link>
      <Link href="/hall-of-fame">Hall of Fame</Link>
    </main>
  );
}
