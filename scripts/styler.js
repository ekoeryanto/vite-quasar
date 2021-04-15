const {readFileSync, writeFileSync} = require('fs')
const {resolve} = require('path')

const source = (...paths) => resolve(__dirname, '../node_modules/quasar/src', ...paths)

const sassy = readFileSync(source('css/index.sass')).toString()
  .split(/\n/)
  const core = sassy.filter(line => line.includes('/helpers/') || line.includes('normalize')  || line.includes('/core/'))
  .map(line => line.replace('./', 'quasar/src/css/'))
  .join('\n')

writeFileSync(resolve(__dirname, '../src/quasar/core.sass'), core)
