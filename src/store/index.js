import { createStore } from "vuex"
import createPersistedState from 'vuex-persistedstate';

import layout from './layout'

const dataState = createPersistedState({
  key: 'viteq',
  paths: [
    'layout.dark',
     'layout.leftDrawer',
     'layout.miniDrawer',
     'layout.rightDrawer'
    ],
});

export default () => {
  const store = createStore({
    strict: import.meta.env.PROD,
    modules: {
      layout
    },
    plugins: [dataState],
  })

  return store
}
