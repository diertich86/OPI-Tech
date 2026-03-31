import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";
import { useDebounce } from "@/composables/useDebounce";

export function useProducts() {
  const productsStore = useProductsStore();
  const {
    categories,
    isLoading,
    error,
    paginatedProducts,
    totalPages,
    currentPage,
    filteredProducts,
    selectedCategory,
  } = storeToRefs(productsStore);

  const localSearchTerm = ref(productsStore.searchTerm);
  const debouncedSearchTerm = useDebounce(localSearchTerm, 350);

  watch(debouncedSearchTerm, (value) => {
    productsStore.setSearchTerm(value);
  });

  onMounted(async () => {
    if (!productsStore.products.length) {
      await productsStore.fetchProducts();
    }
  });

  return {
    categories,
    isLoading,
    error,
    paginatedProducts,
    totalPages,
    currentPage,
    filteredProducts,
    selectedCategory,
    localSearchTerm,
    setCategory: productsStore.setSelectedCategory,
    setPage: productsStore.setCurrentPage,
    retry: productsStore.fetchProducts,
  };
}
