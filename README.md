# Ape Framework ESLint configuration

[Ape Framework](https://github.com/ApeFramework/apeframework) [ESLint](https://eslint.org) configuration.

NPM package: [@apeframework/eslint](https://www.npmjs.com/package/@apeframework/eslint).

GitHub repository: [ApeFramework/apeframework-eslint](https://github.com/ApeFramework/apeframework-eslint).

## Installation

```
yarn add @apeframework/eslint --dev
```

## Usage (`eslint.config.js`)

Node configuration:

```js
import base from '@apeframework/eslint/base'
import typescript from '@apeframework/eslint/typescript'

const config = [
  base(),
  {
    files: ['*.ts', '**/*.ts'],
    ...typescript(),
  },
]

export {
  config as default,
}
```

Browser configuration:

```js
import base from '@apeframework/eslint/base'
import typescript from '@apeframework/eslint/typescript'
import vue from '@apeframework/eslint/vue'

const config = [
  base('browser'),
  {
    files: ['*.ts', '**/*.ts'],
    ...typescript('browser'),
  },
  {
    files: ['*.vue', '**/*.vue'],
    ...vue,
  },
]

export {
  config as default,
}
```
