<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (event: "go", value: number): void;
}>();

const visiblePages = computed(() => {
  const pages: number[] = [];
  const start = Math.max(1, props.currentPage - 2);
  const end = Math.min(props.totalPages, props.currentPage + 2);

  for (let i = start; i <= end; i += 1) {
    pages.push(i);
  }

  return pages;
});
</script>

<template>
  <nav v-if="totalPages > 1" class="pagination" aria-label="Paginación de productos">
    <button :disabled="currentPage === 1" @click="emit('go', currentPage - 1)">Anterior</button>

    <button
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="emit('go', page)"
    >
      {{ page }}
    </button>

    <button :disabled="currentPage === totalPages" @click="emit('go', currentPage + 1)">Siguiente</button>
  </nav>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

button {
  border: 1px solid $color-border;
  background: $color-surface;
  color: $color-text;
  border-radius: $radius-sm;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
}

button.active {
  background: $color-accent;
  border-color: $color-accent;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
