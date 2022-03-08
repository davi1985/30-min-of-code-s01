import { useQuery } from 'react-query';
import { Products } from '../features/Products/Products';
import { Spinner } from '../componentes';
import { http } from '../services/api';

export default function ProductsContainer() {
  const { isLoading, isError, data } = useQuery('products', () =>
    http.get('/products').then(({ data }) => data.products),
  );

  if (isLoading) return <Spinner message="Loading products" variant="orange" />;

  if (isError) return <p>Error :(</p>;

  return <Products products={data} />;
}
