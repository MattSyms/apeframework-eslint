import node from '@apeframework/eslint/node'
import typescript from '@apeframework/eslint/typescript'

const config = [
  node,
  {
    files: ['*.ts', '**/*.ts'],
    ...typescript,
  },
  {
    ignores: [
      'build',
    ],
  },
]

export {
  config as default,
}
