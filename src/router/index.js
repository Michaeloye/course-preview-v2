import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes";

const baseUrl = "/";

export const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});
