import { createRouter, createMemoryHistory, createWebHashHistory } from "vue-router"
import routes from "./routes"

export default () => {
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHashHistory(),
    routes
  })
}
