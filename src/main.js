import { createApp } from 'vue'
import { createQuasar } from './quasar'
import iconSet from 'quasar/icon-set/svg-material-icons-outlined'
import lang from 'quasar/lang/id'
import App from './App.vue'
import '@quasar/extras/roboto-font/roboto-font.css'
import './quasar/core.sass'

const quasar = createQuasar({
  iconSet,
  lang
})

createApp(App)
  .use(quasar)
  .mount('#app')
