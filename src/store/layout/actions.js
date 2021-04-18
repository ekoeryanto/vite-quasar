import Dark from "quasar/src/plugins/Dark";

export function setDarkMode({commit}, mode) {
  if (typeof mode !== 'boolean') {
    mode = 'auto'
  }

  Dark.set(mode);
  commit('setDark', Dark.isActive);
}
