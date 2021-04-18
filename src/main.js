import { createApp } from 'vue'
import { createQuasar } from './quasar'
import createRouter from './router'
import createStore from './store'
import iconSet from 'quasar/icon-set/svg-material-icons-outlined'
import lang from 'quasar/lang/id'
import App from './App.vue'
import '@quasar/extras/roboto-font/roboto-font.css'
import { sync } from 'vuex-router-sync'
// import Quasar from 'quasar/src/vue-plugin'

const quasar = createQuasar({
  iconSet,
  lang,
})

const router = createRouter()
const store = createStore()
sync(store, router)

const app = createApp(App)
app
  .use(router)
  .use(store)
  .use(quasar)

router.isReady().then(async () => {
  // initial dark
  const { dark } = store.state.layout
  await store.dispatch('layout/setDarkMode', dark);

  app.mount('#app')
})
