import { existsSync } from "fs";
import { resolve } from "path";
import importMap from 'quasar/dist/transforms/import-map.json'

export default name => {
  const importName = importMap[name]
  if (!importName) {
    return
  }

  const script = `quasar/${importName}`
  let style = script.replace(/\.js$/, '.sass')

  if (!existsSync(resolve('node_modules', style))) {
    style = undefined
  }

  return {
    path: script,
    sideEffects: style
  }
}
