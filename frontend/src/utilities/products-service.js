import * as productsAPI from "./products-api";

export async function allProducts() {
  const response = await productsAPI.allProducts();
  return response;
}

export async function eachProduct(category) {
  const response = await productsAPI.eachProduct(category);
  console.log(response);
  return response;
}

export async function searchProduct(searchTerm) {
  const response = await productsAPI.searchProduct(searchTerm);
  console.log(response);
  return response;
}

export async function createOneProduct(productData) {
  const response = await productsAPI.createOneProduct(productData);
  return response;
}

export async function getOneProduct(category, id) {
  const response = await productsAPI.getOneProduct(category, id);
  return response;
}

export async function updateProduct(category, id, productData) {
  const response = await productsAPI.updateProduct(category, id, productData);
  return response;
}

export async function deleteProduct(id) {
  const response = await productsAPI.deleteProduct(id);
  console.log(response);
  return response;
}