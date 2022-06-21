import { createRouter, createWebHistory } from "vue-router";

import AddTodo from "./pages/AddTodo";
import TodosList from "./pages/TodosList";
import DonesList from "./pages/DonesList";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "todos" },
    {
      name: "todos",
      path: "/todos",
      component: TodosList,
    },
    {
      path: "/add",
      component: AddTodo,
    },
    { path: "/dones", component: DonesList },
  ],
});

export default router;
