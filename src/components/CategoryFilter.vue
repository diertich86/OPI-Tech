<script setup lang="ts">
defineProps<{
  modelValue: string;
  categories: string[];
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div class="category-filter">
    <select
      :value="modelValue"
      class="category-filter__select"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option value="all">Todas las categorías</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.category-filter__select {
  width: 100%;
  padding: 0.85rem 0.9rem;
  border-radius: $radius-md;
  border: 1px solid $color-border;
  background: $color-surface;
  color: $color-text;
  font: inherit;
  text-transform: capitalize;
}

.category-filter__select:focus {
  outline: none;
  border-color: $color-accent;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
}
</style>
