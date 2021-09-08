import install from 'quasar/src/install-quasar.js'

import Dark from 'quasar/src/plugins/Dark'
import Notify from 'quasar/src/plugins/Notify'
import LocalStorage from 'quasar/src/plugins/LocalStorage'
import ClosePopup from 'quasar/src/directives/ClosePopup'

import lang from 'quasar/lang/zh-CN'
import iconSet from 'quasar/icon-set/eva-icons'
import '@quasar/extras/eva-icons/eva-icons.css'

export { useQuasar } from 'quasar/src/composables.js'

export const Quasar = (app, options) => {
  install(app, {
    directives: {
      ClosePopup
    },
    plugins: {
      Dark,
      Notify,
      LocalStorage
    },
    lang,
    iconSet,
    ...options
  })
}
