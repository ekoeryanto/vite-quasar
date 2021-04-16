const pages = import.meta.glob(`../pages/*.vue`)

function createRoutes(prefix = '') {
  return Object.keys(pages).map((path) => {
    const name = path.match(/\.\/pages\/(.*)\.vue$/)[1].toLowerCase()
    return {
      path: ['home', 'index'].includes(name) ? prefix : prefix + name,
      component: pages[path] // () => import('./pages/*.vue')
    }
  }).filter(route => !route.path.startsWith('/_'))
}

export default [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: createRoutes()
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/_404.vue'),
  }
]
