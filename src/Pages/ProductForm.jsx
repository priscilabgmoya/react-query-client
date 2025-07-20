import  { useState } from 'react';
import { createProduct } from '../API/products.api';
import { useMutationGeneric } from '../Query/queryClient';
const ProductForm = () => {
    const addProduct = useMutationGeneric(createProduct, 'products', 'Product created successfully');
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    });
    const onSubmit = (product) => {
        console.log('Product submitted:', product);
        addProduct.mutate({...product, inStock: true}); // Assuming inStock is true by default
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(product);

        setProduct({ name: '', price: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.01"
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;