<script setup lang="ts">
import { watch } from "vue";
import { useProducts } from "@/composables/useProducts";
import SearchBar from "@/components/SearchBar.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import EmptyState from "@/components/EmptyState.vue";
import ErrorState from "@/components/ErrorState.vue";
import PaginationControls from "@/components/PaginationControls.vue";

const {
  categories,
  isLoading,
  error,
  paginatedProducts,
  totalPages,
  currentPage,
  filteredProducts,
  selectedCategory,
  localSearchTerm,
  setCategory,
  setPage,
  retry,
} = useProducts();

watch(selectedCategory, (value) => {
  setCategory(value);
});
</script>

<template>
  <section class="products-view container">
    <header class="products-view__header">
      <h1>Productos</h1>
      <p>Explora, filtra y revisa el catálogo de forma rápida.</p>
    </header>

    <div class="products-view__filters">
      <SearchBar v-model="localSearchTerm" />
      <CategoryFilter v-model="selectedCategory" :categories="categories" />
    </div>

    <ErrorState v-if="error" :message="error" @retry="retry" />
    <LoadingSkeleton v-else-if="isLoading" />
    <EmptyState v-else-if="!filteredProducts.length" />
    <template v-else>
      <ProductGrid :products="paginatedProducts" />
      <PaginationControls :current-page="currentPage" :total-pages="totalPages" @go="setPage" />
    </template>
  </section>
</template>

<style scoped lang="scss">
.products-view {
  padding-top: 1.25rem;
  padding-bottom: 2rem;
  display: grid;
  gap: 1.25rem;
}

.products-view__header h1 {
  margin: 0 0 0.25rem;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.products-view__header p {
  margin: 0;
  color: $color-text-muted;
}

.products-view__filters {
  display: grid;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .products-view__filters {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
