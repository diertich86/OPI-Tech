<template>
  <div class="skeleton-grid" aria-hidden="true">
    <div v-for="item in 8" :key="item" class="skeleton-card">
      <div class="skeleton skeleton--image"></div>
      <div class="skeleton skeleton--line"></div>
      <div class="skeleton skeleton--line short"></div>
      <div class="skeleton skeleton--line tiny"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skeleton-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.skeleton-card {
  border-radius: $radius-lg;
  border: 1px solid $color-border;
  background: $color-surface;
  padding: 1rem;
}

.skeleton {
  border-radius: $radius-sm;
  background: linear-gradient(90deg, #1f2937 0%, #334155 50%, #1f2937 100%);
  background-size: 200% 100%;
  animation: skeleton 1.2s infinite;
}

.skeleton--image {
  height: 170px;
  margin-bottom: 1rem;
}

.skeleton--line {
  height: 14px;
  margin-bottom: 0.65rem;
}

.short {
  width: 70%;
}

.tiny {
  width: 40%;
}

@keyframes skeleton {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
