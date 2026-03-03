# Ape Framework ESLint configuration

Ape Framework [ESLint](https://eslint.org) configuration.

NPM package: [@apeframework/eslint](https://www.npmjs.com/package/@apeframework/eslint).

GitHub repository: [MattSyms/apeframework-eslint](https://github.com/MattSyms/apeframework-eslint).

## Installation

```
yarn add @apeframework/eslint --dev
```

## Usage (`eslint.config.js`)

Node configuration:

```js
import javascript from '@apeframework/eslint/javascript'
import typescript from '@apeframework/eslint/typescript'

const config = [
  {
    files: ['*.js', '**/*.js'],
    ...javascript(),
  },
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
import javascript from '@apeframework/eslint/javascript'
import typescript from '@apeframework/eslint/typescript'
import vue from '@apeframework/eslint/vue'

const config = [
  {
    files: ['*.js', '**/*.js'],
    ...javascript(),
  },
  {
    files: ['*.ts', '**/*.ts'],
    ...typescript('browser'),
  },
  {
    files: ['*.vue', '**/*.vue'],
    ...vue(),
  },
]

export {
  config as default,
}
```

## Development

Install dependencies:

```
yarn
```

Update dependencies:

```
yarn update
```

Analyze rules:

```
yarn analyze
```

Compile:

```
yarn compile
```

Lint:

```
yarn lint
```

## Release:

Tag stable release:

```
git tag v<major>.<minor>.<patch>
```

Tag dev release:

```
git tag v0.0.0-dev.<number>
```

Push tags:

```
git push --tags
```
