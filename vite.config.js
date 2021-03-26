import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import quasarMap from 'quasar/dist/transforms/import-map.json'
import ViteComponents from 'vite-plugin-components'
import styleImport from 'vite-plugin-style-import';
import {pascalCase} from 'pascal-case'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'quasar.variables.sass': resolve(__dirname, './src/assets/quasar.variables.sass')
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "quasar.variables.sass"\n'
      }
    }
  },
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
    ViteComponents({
      customComponentResolvers: [
        name => quasarMap[name] && ({
          importName: name, path: 'quasar'
        })
      ]
    }),
    styleImport({
      libs: [
        {
          libraryName: 'quasar',
          esModule: true,
          resolveStyle: (name) => {
            const pname = pascalCase(name)
            return 'quasar/'+quasarMap[pname].replace(/.js$/, '.sass')
          },
          ensureStyleFile: true
        }
      ]
    })
  ]
})
