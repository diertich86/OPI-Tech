import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { productsApi } from "@/services/productsApi";
import type { Product } from "@/types/product";

const PAGE_SIZE = 8;

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const categories = ref<string[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const searchTerm = ref("");
  const selectedCategory = ref("all");
  const currentPage = ref(1);

  const filteredProducts = computed(() => {
    const normalizedSearch = searchTerm.value.trim().toLowerCase();

    return products.value.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory.value === "all" || product.category === selectedCategory.value;

      return matchesSearch && matchesCategory;
    });
  });

  const totalPages = computed(() => Math.max(1, Math.ceil(filteredProducts.value.length / PAGE_SIZE)));

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredProducts.value.slice(start, end);
  });

  function setSearchTerm(value: string) {
    searchTerm.value = value;
    currentPage.value = 1;
  }

  function setSelectedCategory(value: string) {
    selectedCategory.value = value;
    currentPage.value = 1;
  }

  function setCurrentPage(page: number) {
    if (page < 1 || page > totalPages.value) {
      return;
    }
    currentPage.value = page;
  }

  async function fetchProducts() {
    isLoading.value = true;
    error.value = null;

    try {
      const [productsData, categoriesData] = await Promise.all([
        productsApi.getProducts(),
        productsApi.getCategories(),
      ]);

      products.value = productsData;
      categories.value = categoriesData;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error inesperado al cargar productos";
      error.value = message;
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchProductById(id: number) {
    error.value = null;

    try {
      return await productsApi.getProductById(id);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error al cargar el detalle";
      error.value = message;
      throw err;
    }
  }

  return {
    products,
    categories,
    isLoading,
    error,
    searchTerm,
    selectedCategory,
    currentPage,
    pageSize: PAGE_SIZE,
    filteredProducts,
    paginatedProducts,
    totalPages,
    fetchProducts,
    fetchProductById,
    setSearchTerm,
    setSelectedCategory,
    setCurrentPage,
  };
});
