import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'
import jestRules from './rules/jest.js'
import type { Config } from './Config.js'

const jestConfig: Config = {
  plugins: {
    'jest': jestPlugin,
  },
  languageOptions: {
    globals: globals.jest,
  },
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: 'jest.config.json',
      },
    },
  },
  rules: {
    ...jestRules,
  },
}

export {
  jestConfig as default,
}
