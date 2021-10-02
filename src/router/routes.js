const pages = import.meta.glob(`../pages/**/*.vue`)

function createRoutes(prefix = '') {
  return Object.keys(pages)
    .map((path) => {
      const name = path.match(/\.\/pages\/(.*)\.vue$/)[1].toLowerCase()
      console.log(name)
      return {
        path: prefix + name.replace('index', '').replace('home', ''),
        component: pages[path] // () => import('./pages/*.vue')
      }
    })
    .filter((route) => !route.path.startsWith('/_'))
}
const routes = createRoutes()
console.log(routes)
export default [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: routes
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/_404.vue')
  }
]
