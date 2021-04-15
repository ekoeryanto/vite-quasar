import install from 'quasar/src/install-quasar.js'

/**
 * Create quasar plugin
 * @param {import('quasar').QuasarPluginOptions} options
 */
export function createQuasar(options) {
  return {
    ...options,
    install
  }
}
