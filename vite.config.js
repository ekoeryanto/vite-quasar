import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import {resolve} from 'path'
import { Quasar } from 'quasar';
import resolveQuasar from './scripts/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'quasar$': resolve('node_modules/quasar/dist/quasar.esm.prod.js'),
      '@': [resolve(__dirname, './src')],
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/quasar/variables.sass"\n'
      }
    }
  },
  define: {
    __QUASAR_VERSION__: JSON.stringify(Quasar.version),
    __QUASAR_SSR__: 'import.meta.env.SSR',
    __QUASAR_SSR_SERVER__: false,
    // __QUASAR_SSR_SERVER__: 'import.meta.env.SSR',
    // __QUASAR_SSR_CLIENT__: 'import.meta.env.SSR && window !== undefined',
    __QUASAR_SSR_CLIENT__: false,
    __QUASAR_SSR_PWA__: false
    // __QUASAR_SSR_PWA__: 'navigator.standalone || window.matchMedia("(display-mode: standalone)").matches'
  },
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        resolveQuasar
      ]
    })
  ]
})
