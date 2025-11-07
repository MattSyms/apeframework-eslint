import typescriptPlugin from 'typescript-eslint'
import { getGlobals } from './getGlobals.js'
import typescriptRules from './rules/typescript.js'
import typescriptDisabledRules from './rules/typescriptDisabled.js'
import type { Config } from './Config.js'
import type { Globals } from './Globals.js'

const typescriptConfig = (globals: Globals | undefined): Config => {
  return {
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
      globals: getGlobals(globals),
    },
    rules: {
      ...typescriptDisabledRules,
      ...typescriptRules,
    },
  }
}

export {
  typescriptConfig as default,
}
