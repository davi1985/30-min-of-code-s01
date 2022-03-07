export default function seeds(server) {
  server.createList('user', 10);
  server.createList('product', 15);
}
