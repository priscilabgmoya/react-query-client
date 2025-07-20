import { getProducts } from '../API/products.api';
import CardProduct from '../Components/CardProduct';
import { UseGetGeneric } from '../Query/queryClient';

export default function ListProducts() {
 const { isLoading, data, isError, error } = UseGetGeneric('products', getProducts, (data) => data.sort((a, b) => b.id - a.id));

    if (isLoading) return <div>Loading...</div>;
    else if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
    {
        data.map((product) => (
           <CardProduct key={product.id} product={product} />
        ))
    }
    
    </div>
  )
}
