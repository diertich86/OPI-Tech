<script setup lang="ts">
const model = defineModel<string>({ required: true });

defineProps<{
  placeholder?: string;
}>();
</script>

<template>
  <label class="search-bar">
    <span class="search-bar__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
        <path d="M20 20L16.6 16.6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </span>
    <input
      v-model="model"
      class="search-bar__input"
      type="text"
      :placeholder="placeholder ?? 'Buscar producto...'"
      autocomplete="off"
    />
  </label>
</template>

<style scoped lang="scss">
.search-bar {
  position: relative;
  display: block;
}

.search-bar__icon {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: $color-text-muted;
  width: 1rem;
  height: 1rem;
}

.search-bar__icon svg {
  width: 100%;
  height: 100%;
}

.search-bar__input {
  width: 100%;
  padding: 0.85rem 0.9rem 0.85rem 2.2rem;
  border-radius: $radius-md;
  border: 1px solid $color-border;
  background-color: $color-surface;
  color: $color-text;
  font: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-bar__input::placeholder {
  color: $color-text-muted;
}

.search-bar__input:focus {
  outline: none;
  border-color: $color-accent;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
}
</style>
