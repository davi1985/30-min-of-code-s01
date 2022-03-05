import { useEffect, useState } from 'react';
import { http } from '../../services/api';

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await http.get('/products');

      setProducts(data.products);
    };

    getProducts();
  }, []);

  return products.map((product) => <p key={product.id}>{product.name}</p>);
}
