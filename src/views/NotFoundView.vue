<template>
  <section class="not-found container">
    <h1>404</h1>
    <p>La ruta solicitada no existe.</p>
    <RouterLink to="/">Volver al inicio</RouterLink>
  </section>
</template>

<style scoped lang="scss">
.not-found {
  min-height: 60vh;
  display: grid;
  place-content: center;
  gap: 0.75rem;
  text-align: center;
}

h1,
p {
  margin: 0;
}

a {
  color: $color-accent;
  text-decoration: none;
}
</style>
