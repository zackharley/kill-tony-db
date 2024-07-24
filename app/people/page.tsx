import prisma from '@/lib/prisma';
import { Link } from '@mui/material';

export default async function PeoplePage() {
  const people = await prisma.person.findMany({
    include: {
      appearances: {
        include: {
          episode: true,
        },
      },
    },
  });
  // order people by number of appearances (desc)

  const peopleOrdered = people.sort((a, b) => {
    return b.appearances.length - a.appearances.length;
  });
  return (
    <div>
      <h1>People</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Appearances</th>
          </tr>
        </thead>
        <tbody>
          {peopleOrdered.map((person) => {
            return (
              <tr key={person.id}>
                <td>
                  <Link href={`/people/${person.id}`}>{person.name}</Link>
                </td>
                <td>{person.appearances.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
