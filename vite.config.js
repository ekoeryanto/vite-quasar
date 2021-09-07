import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'
import { Quasar } from 'quasar'
import resolveQuasar from './scripts/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': [resolve(__dirname, './src')]
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
    __QUASAR_SSR__: JSON.stringify('import.meta.env.SSR'),
    __QUASAR_SSR_SERVER__: false,
    __QUASAR_SSR_CLIENT__: false,
    __QUASAR_SSR_PWA__: false
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [resolveQuasar]
    })
  ],
  build: {
    // terserOptions: {
    //   compress: {
    //     drop_console: true
    //   }
    // },
    brotliSize: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            const modules = ['quasar', 'plyr']
            const chunk = modules.find((module) => id.includes(`/node_modules/${module}`))
            return chunk ? `vendor-${chunk}` : 'vendor'
          }
        }
      }
    }
  }
})
