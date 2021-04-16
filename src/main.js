import { createApp } from 'vue'
import { createQuasar } from './quasar'
import createRouter from './router'
import iconSet from 'quasar/icon-set/svg-material-icons-outlined'
import lang from 'quasar/lang/id'
import App from './App.vue'
import '@quasar/extras/roboto-font/roboto-font.css'

const quasar = createQuasar({
  iconSet,
  lang
})

const router = createRouter()

const app = createApp(App)
  app.use(router)
  .use(quasar)

router.isReady().then(() => {
  app.mount('#app')
})
