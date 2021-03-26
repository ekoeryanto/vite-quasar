import { createApp } from 'vue'
import Quasar from 'quasar/src/vue-plugin'
import iconSet from 'quasar/icon-set/svg-mdi-v5'
import lang from 'quasar/lang/id'
import App from './App.vue'

/**
 * @type {import('quasar').QuasarPluginOptions}
 */
const qOpts = {
  iconSet,
  lang
}

createApp(App)
  .use(Quasar, qOpts)
  .mount('#app')
