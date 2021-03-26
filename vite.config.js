import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import quasarMap from 'quasar/dist/transforms/import-map.json'
import VitePluginComponents from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __QUASAR_VERSION__: JSON.stringify('2.0.0'),
    __QUASAR_SSR__: false,
    __QUASAR_SSR_SERVER__: false,
    __QUASAR_SSR_CLIENT__: false,
    __QUASAR_SSR_PWA__: false
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          quasar: ['quasar']
        }
      }
    }
  },
  plugins: [
    vue(),
    VitePluginComponents({
      customComponentResolvers: [
        name => quasarMap[name] && ({
          importName: name, path: 'quasar'
        })
      ]
    })
  ]
})
