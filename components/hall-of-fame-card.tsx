import type { Person } from '@prisma/client';

export default function HallOfFameCard({ person }: { person: Person }) {
  return <div>{person.name}</div>;
}
