import { deleteProduct, updateProduct } from "../API/products.api";
import { useMutationGeneric } from "../Query/queryClient";


export default function CardProduct({ product }) {
    const deletePorduct = useMutationGeneric((id)=>deleteProduct(id), 'products', 'Product deleted successfully');
    const updateProducts = useMutationGeneric((product) => updateProduct(product), 'products', 'Product updated successfully');
    
    const handleDelete = (id) => {
        // Aquí puedes implementar la lógica para eliminar el producto
        console.log(`Eliminar producto con ID: ${id}`);
        deletePorduct.mutate(id);
    }

    const handelUpdate = (product) => {
        updateProducts.mutate(product );
    }
    return (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={()=>handleDelete(product.id)}>delete</button>
            <label htmlFor="inStock">En Stock</label>
            <input type="checkbox" name="inStock" id="" checked={product.inStock} onChange={(e)=>{
                product.inStock = e.target.checked;
                handelUpdate(product);
            }}/>
        </div>
    )
}
