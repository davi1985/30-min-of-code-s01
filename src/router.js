import { Link, Outlet, ReactLocation, Router, useMatch } from 'react-location';
import { Header } from './componentes/Header';
import { Products } from './containers/Products/Products';
import { Users } from './containers/Users/Users';
import { http } from './services/api';

const location = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <Header title="Dashboard" />,
  },
  {
    path: '/users',
    element: <Users />,
    loader: async () => ({
      users: await http.get('/users').then((data) => data.data.users),
    }),
    pendingElement: async () => <div>Loading...</div>,
    pendingMs: 300,
  },
  {
    path: '/products',
    element: <Products />,
  },
];

export { location, routes, Router, Link, Outlet, useMatch };
