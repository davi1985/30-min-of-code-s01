import { Link, Outlet, ReactLocation, Router, useMatch } from 'react-location';
import { Header, Spinner } from './componentes';
import { http } from './services/api';

import { ReactLocationSimpleCache } from 'react-location-simple-cache';

const cache = new ReactLocationSimpleCache();
const location = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <Header title="Dashboard" />,
  },
  {
    path: '/users',
    element: () =>
      import('./containers/Users/Users').then((module) => <module.default />),
    loader: cache.createLoader(async () => ({
      users: await http.get('/users').then((data) => data.data.users),
    })),
    pendingElement: async () => <Spinner />,
    pendingMs: 300,
  },
  {
    path: '/products',
    element: () =>
      import('./containers/Products/Products').then((module) => (
        <module.default />
      )),
  },
];

export { location, routes, Router, Link, Outlet, useMatch };
