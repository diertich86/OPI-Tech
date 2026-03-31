<script setup lang="ts">
defineProps<{
  message: string;
}>();

const emit = defineEmits<{
  (event: "retry"): void;
}>();
</script>

<template>
  <section class="state state--error" role="alert">
    <h3>Ha ocurrido un error</h3>
    <p>{{ message }}</p>
    <button type="button" class="state__button" @click="emit('retry')">Reintentar</button>
  </section>
</template>

<style scoped lang="scss">
.state {
  border-radius: $radius-lg;
  border: 1px solid rgba(239, 68, 68, 0.35);
  background: rgba(127, 29, 29, 0.18);
  padding: 1.5rem;
}

h3 {
  margin: 0 0 0.5rem;
}

p {
  margin: 0;
  color: $color-text-muted;
}

.state__button {
  margin-top: 1rem;
  border: none;
  border-radius: $radius-sm;
  background: $color-accent;
  color: white;
  padding: 0.6rem 0.85rem;
  font: inherit;
  cursor: pointer;
}
</style>
