<template>
  <header class="app-header">
    <div class="container app-header__content">
      <RouterLink class="app-header__brand" to="/">OpiTech Dashboard</RouterLink>
      <p class="app-header__subtitle">
        Gestor de productos<br />
        <small>Dietrich Rajiv Rojas Quiroga</small>
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(8px);
  background: rgba(11, 18, 32, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.app-header__content {
  min-height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.app-header__brand {
  color: $color-text;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
}

.app-header__subtitle {
  color: $color-text-muted;
  margin: 0;
  font-size: 0.875rem;
  text-align: right;
}

@media (min-width: 768px) {
  .app-header__content {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
