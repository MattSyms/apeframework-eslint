import stylisticPlugin from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import { getGlobals } from './getGlobals.js'
import baseRules from './rules/base.js'
import importRules from './rules/import.js'
import stylisticRules from './rules/stylistic.js'
import type { Globals } from './Globals.js'

const baseConfig = (globals: Globals | undefined): any => {
  return {
    plugins: {
      'import': importPlugin,
      'stylistic': stylisticPlugin,
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: getGlobals(globals),
    },
    rules: {
      ...baseRules,
      ...importRules,
      ...stylisticRules,
    },
  }
}

export {
  baseConfig as default,
}
