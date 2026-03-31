# OpoTech Product Dashboard

Dashboard de productos para e-commerce construido con Vue 3, TypeScript y arquitectura escalable.

## Stack Tecnologico

- Vue 3
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
- Layout responsive (mobile-first)

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

## Instalacion y ejecucion (Windows / PowerShell)

1. Ir al directorio del proyecto:

```powershell
cd "D:\Pruebas- trabajo\OpoTech\e-commerce"
```

2. Instalar dependencias:

```powershell
npm install
```

3. Levantar entorno de desarrollo:

```powershell
npm run dev
```

4. Abrir en navegador la URL mostrada por Vite (normalmente `http://localhost:5173`).

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo
- `npm run build`: compila para produccion
- `npm run preview`: previsualiza build de produccion

## Decisiones de Arquitectura

- **Separacion de responsabilidades**
  - `services`: llamadas HTTP aisladas
  - `stores`: estado global, filtros, paginacion y manejo de errores
  - `composables`: logica de presentacion reutilizable
  - `components`: UI desacoplada y reusable

- **Escalabilidad**
  - Tipado fuerte con interfaces en `types`
  - Alias `@` para imports limpios
  - Rutas con lazy loading para vistas

- **UX**
  - Feedback visual claro durante carga y errores
  - Busqueda con debounce para evitar renderizados innecesarios
  - Cards con transiciones sutiles y jerarquia visual consistente

## API utilizada

- Productos: `GET https://fakestoreapi.com/products`
- Categorias: `GET https://fakestoreapi.com/products/categories`
- Detalle: `GET https://fakestoreapi.com/products/:id`

## Posibles mejoras futuras

- Persistencia de filtros y pagina en query params
- Ordenamiento por precio/rating
- Testing unitario y de componentes (Vitest + Vue Test Utils)
- Internacionalizacion (i18n)
- Modo claro/oscuro

