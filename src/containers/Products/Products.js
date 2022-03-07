import { http } from '../../services/api';

import { Header, Spinner } from '../../componentes';
import { Card } from './Card';
import { useQuery } from 'react-query';

export default function Products() {
  const { isLoading, isError, data } = useQuery('products', () =>
    http.get('/products').then(({ data }) => data.products),
  );

  if (isLoading) return <Spinner />;

  if (isError) return <p>Error :(</p>;

  return (
    <>
      <Header title="Products" />

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
