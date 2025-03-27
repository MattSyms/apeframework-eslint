import stylisticPlugin from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import baseRules from './rules/base.js'
import importRules from './rules/import.js'
import stylisticRules from './rules/stylistic.js'

const baseConfig = {
  plugins: {
    'import': importPlugin,
    'stylistic': stylisticPlugin,
  },
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    globals: {},
  },
  rules: {
    ...baseRules,
    ...importRules,
    ...stylisticRules,
  },
}

export {
  baseConfig as default,
}
