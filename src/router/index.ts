import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "products",
      component: () => import("@/views/ProductsView.vue"),
    },
    {
      path: "/products/:id",
      name: "product-detail",
      component: () => import("@/views/ProductDetailView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
