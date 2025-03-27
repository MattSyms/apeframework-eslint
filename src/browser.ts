import globals from 'globals'
import base from './base.js'

const browserConfig = {
  ...base,
}

browserConfig.languageOptions.globals = globals.browser

export {
  browserConfig as default,
}
