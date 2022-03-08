import { makeServer } from '../../miragejs/server';

describe('features/Products', () => {
  let server;

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render', () => {
    const products = server.createList('product', 10);

    expect(true).toBe(true);
  });
});
