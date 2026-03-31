import type { Product } from "@/types/product";

const API_BASE_URL = "https://fakestoreapi.com";

async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudo obtener ${endpoint}`);
  }

  return (await response.json()) as T;
}

export const productsApi = {
  getProducts() {
    return request<Product[]>("/products");
  },
  getProductById(id: number) {
    return request<Product>(`/products/${id}`);
  },
  getCategories() {
    return request<string[]>("/products/categories");
  },
};
