import install from 'quasar/src/install-quasar.js'
import Dark from 'quasar/src/plugins/Dark'
import ClosePopup from 'quasar/src/directives/ClosePopup'
/**
 * Create quasar plugin
 * @param {import('quasar').QuasarPluginOptions} options
 */
export function createQuasar(options) {
  return {
    directives: {
      ClosePopup,
    },
    plugins: {
      Dark
    },
    ...options,
    install
  }
}
