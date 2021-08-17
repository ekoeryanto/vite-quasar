import { createApp } from 'vue'
import { Quasar } from './quasar'
import createRouter from './router'
import createStore from './store'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

const router = createRouter()
const store = createStore()
sync(store, router)

const app = createApp(App)
app.use(router).use(store).use(Quasar, {})

router.isReady().then(async () => {
  // initial dark
  const { dark } = store.state.layout
  await store.dispatch('layout/setDarkMode', dark)

  app.mount('#app')
})
