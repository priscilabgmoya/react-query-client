import { api } from "./config.api";

const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
}   
const createProduct = async (product) => api.post('/products', product);

const deleteProduct = async (id) => api.delete(`/products/${id}`);
const updateProduct = async (product) => {
    const { id, ...productData } = product;
    api.put(`/products/${id}`, productData);
  
}

export { getProducts ,createProduct,deleteProduct,updateProduct};