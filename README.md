# OpiTech Product Dashboard

Dashboard de productos para e-commerce construido con Vue, TypeScript y arquitectura escalable.

## Stack Tecnologico

- Vue
- TypeScript
- Vite
- Vue Router
- Pinia
- Sass (SCSS)
- Fetch API

## Funcionalidades

- Listado de productos desde API publica (`https://fakestoreapi.com/products`)
- Busqueda por nombre con debounce
- Filtro por categoria dinamico
- Paginacion del lado del cliente
- Vista de detalle de producto
- Estados visuales: loading skeletons, empty state y error state
- Lazy loading de imagenes
- Layout responsive

## Estructura del Proyecto

```txt
src/
  assets/styles/        # Variables, mixins y estilos globales SCSS
  components/           # Componentes UI reutilizables
  composables/          # Logica reutilizable (useProducts, useDebounce)
  router/               # Configuracion de rutas
  services/             # Capa de acceso a API
  stores/               # Estado global con Pinia
  types/                # Tipos e interfaces TypeScript
  views/                # Vistas por ruta
```

## Requisitos

- Node.js LTS (recomendado v20+)
- npm v10+

## Instalacion y ejecucion

Clona el repositorio:
git clone https://github.com/diertich86/opi-tech.git

Instala dependencias:
npm install

Ejecuta el proyecto:
npm run dev

## API utilizada

- Productos: `GET https://fakestoreapi.com/products`
- Categorias: `GET https://fakestoreapi.com/products/categories`
- Detalle: `GET https://fakestoreapi.com/products/:id`
