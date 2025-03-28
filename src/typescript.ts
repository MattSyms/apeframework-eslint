import globals from 'globals'
import typescriptPlugin from 'typescript-eslint'
import typescriptRules from './rules/typescript.js'
import typescriptDisabledRules from './rules/typescriptDisabled.js'

const typescriptConfig = {
  plugins: {
    'typescript': typescriptPlugin.plugin,
  },
  languageOptions: {
    parser: typescriptPlugin.parser,
    parserOptions: {
      projectService: true,
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
    globals: globals.browser,
  },
  rules: {
    ...typescriptDisabledRules,
    ...typescriptRules,
  },
}

export {
  typescriptConfig as default,
}
