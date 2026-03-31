<template>
  <section class="state state--empty">
    <h3>No hay productos para mostrar</h3>
    <p>Prueba con otro término o cambia la categoría seleccionada.</p>
  </section>
</template>

<style scoped lang="scss">
.state {
  border-radius: $radius-lg;
  border: 1px dashed $color-border;
  background: $color-surface-soft;
  padding: 2rem;
  text-align: center;
}

h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin: 0;
  color: $color-text-muted;
}
</style>
