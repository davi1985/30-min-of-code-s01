import { makeServer } from '../server';

export function getUsers({ quantity = 10 }) {
  const server = makeServer();

  const users = server.createList('user', quantity);

  server.shutdown();

  return users;
}

export function getUser() {
  const server = makeServer();

  const user = server.create('user');

  server.shutdown();

  return user;
}
