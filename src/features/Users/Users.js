import { Card } from './Card';

import { Header } from '../../componentes/Header';

export function Users({ users }) {
  return (
    <>
      <Header title="Users" />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}
