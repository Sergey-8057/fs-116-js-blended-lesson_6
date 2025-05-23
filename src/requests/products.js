import { dummyApi } from '../services/api';

// Task - 1

export async function getAllProducts() {
  return await dummyApi.get('/products');
}

// Task - 2

export async function getproductByID(id) {
  return await dummyApi.get(`/products/${id}`);
}

// Task - 3

export async function addProduct(newProduct) {
  return await dummyApi.post('/products/add', newProduct);
}
