import { Suspense } from 'react';
import Episodes from '@/components/epidodes';

export const dynamic = 'force-dynamic';

export default function EpisodesPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<p>Loading...</p>}>
        <Episodes />
      </Suspense>
    </main>
  );
}
