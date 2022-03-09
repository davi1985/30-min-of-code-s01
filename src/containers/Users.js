import { useMatch } from 'react-location';
import { Users } from '../features/Users/Users';

export default function UsersContainer() {
  const {
    data: { users },
  } = useMatch();

  return <Users users={users} />;
}
