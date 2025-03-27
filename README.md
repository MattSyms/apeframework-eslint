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
import node from '@apeframework/eslint/node'
import typescript from '@apeframework/eslint/typescript'

const config = [
  node,
  typescript,
]

export {
  config as default,
}
```

Browser configuration:

```js
import browser from '@apeframework/eslint/browser'
import typescript from '@apeframework/eslint/typescript'
import vue from '@apeframework/eslint/vue'

const config = [
  browser,
  typescript,
  vue,
]

export {
  config as default,
}
```
