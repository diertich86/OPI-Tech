<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import type { Product } from "@/types/product";
import ErrorState from "@/components/ErrorState.vue";
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";

const route = useRoute();
const store = useProductsStore();
const product = ref<Product | null>(null);
const isLoading = ref(false);
const localError = ref<string | null>(null);

const productId = computed(() => Number(route.params.id));

async function fetchDetail() {
  isLoading.value = true;
  localError.value = null;

  try {
    product.value = await store.fetchProductById(productId.value);
  } catch {
    localError.value = store.error ?? "No se pudo cargar el producto";
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchDetail);
</script>

<template>
  <section class="detail-view container">
    <RouterLink to="/" class="detail-view__back">Volver al listado</RouterLink>

    <ErrorState v-if="localError" :message="localError" @retry="fetchDetail" />
    <LoadingSkeleton v-else-if="isLoading" />
    <article v-else-if="product" class="detail-card">
      <img class="detail-card__image" :src="product.image" :alt="product.title" loading="lazy" />
      <div class="detail-card__content">
        <p class="detail-card__category">{{ product.category }}</p>
        <h1>{{ product.title }}</h1>
        <p class="detail-card__description">{{ product.description }}</p>
        <p class="detail-card__price">${{ product.price.toFixed(2) }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
.detail-view {
  padding-top: 1.25rem;
  padding-bottom: 2rem;
  display: grid;
  gap: 1rem;
}

.detail-view__back {
  color: $color-accent;
  text-decoration: none;
  width: fit-content;
}

.detail-card {
  border-radius: $radius-lg;
  border: 1px solid $color-border;
  background: $color-surface;
  padding: 1rem;
  display: grid;
  gap: 1rem;
}

.detail-card__image {
  width: 100%;
  max-height: 420px;
  object-fit: contain;
  background: $color-surface-soft;
  border-radius: $radius-md;
  padding: 1rem;
}

.detail-card__content h1 {
  margin: 0.4rem 0 0.75rem;
}

.detail-card__category {
  margin: 0;
  color: $color-text-muted;
  text-transform: capitalize;
}

.detail-card__description {
  color: $color-text-muted;
  line-height: 1.6;
}

.detail-card__price {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0;
}

@media (min-width: 900px) {
  .detail-card {
    grid-template-columns: 1fr 1.2fr;
    align-items: center;
    padding: 1.5rem;
  }
}
</style>
