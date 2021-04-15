import { existsSync } from "fs";
import { resolve } from "path";
import importMap from 'quasar/dist/transforms/import-map.json'

export default name => {
  const path = 'quasar/'+importMap[name]
  let sideEffects = path.replace(/\.js$/, '.sass')

  if (!existsSync(resolve('node_modules', sideEffects))) {
    sideEffects = undefined
  }

  if(path) {
    return {
      path,
      sideEffects
    }
  }
}
