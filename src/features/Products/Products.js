import { Header } from '../../componentes';
import { Card } from './Card';

export function Products({ products }) {
  return (
    <>
      <Header title="Products" />

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
