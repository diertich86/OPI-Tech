<script setup lang="ts">
import type { Product } from "@/types/product";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <article class="product-card">
    <img class="product-card__image" :src="product.image" :alt="product.title" loading="lazy" />
    <div class="product-card__content">
      <p class="product-card__category">{{ product.category }}</p>
      <h3 class="product-card__title">{{ product.title }}</h3>
      <div class="product-card__footer">
        <p class="product-card__price">${{ product.price.toFixed(2) }}</p>
        <RouterLink class="product-card__button" :to="`/products/${product.id}`">Ver detalle</RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: $radius-lg;
  border: 1px solid $color-border;
  background: $color-surface;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: $shadow-md;
}

.product-card__image {
  width: 100%;
  height: 220px;
  object-fit: contain;
  background: $color-surface-soft;
  padding: 1rem;
}

.product-card__content {
  padding: 1rem;
  display: grid;
  gap: 0.65rem;
}

.product-card__category {
  margin: 0;
  color: $color-text-muted;
  font-size: 0.8rem;
  text-transform: capitalize;
}

.product-card__title {
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
  min-height: 2.8em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card__footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.product-card__price {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.product-card__button {
  text-decoration: none;
  color: $color-accent;
  font-weight: 600;
}
</style>
