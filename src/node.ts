import globals from 'globals'
import base from './base.js'

const nodeConfig = {
  ...base,
}

nodeConfig.languageOptions.globals = globals.node

export {
  nodeConfig as default,
}
