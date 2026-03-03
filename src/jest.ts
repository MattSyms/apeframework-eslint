import stylisticPlugin from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'
import typescriptPlugin from 'typescript-eslint'
import baseRules from './rules/base.js'
import importRules from './rules/import.js'
import jestRules from './rules/jest.js'
import stylisticRules from './rules/stylistic.js'
import typescriptRules from './rules/typescript.js'
import typescriptDisabledRules from './rules/typescriptDisabled.js'
import type { Config } from './Config.js'

const jestConfig = (): Config => {
  return {
    plugins: {
      'import': importPlugin,
      'stylistic': stylisticPlugin,
      'typescript': typescriptPlugin.plugin,
      'jest': jestPlugin,
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: globals.jest,
      parser: typescriptPlugin.parser,
      parserOptions: {
        projectService: true,
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        jest: {
          jestConfigFile: 'jest.config.json',
        },
      },
    },
    rules: {
      ...baseRules,
      ...importRules,
      ...stylisticRules,
      ...typescriptDisabledRules,
      ...typescriptRules,
      ...jestRules,
    },
  }
}

export {
  jestConfig as default,
}
