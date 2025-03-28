import base from '@apeframework/eslint/base'
import typescript from '@apeframework/eslint/typescript'

const config = [
  base(),
  {
    files: ['*.ts', '**/*.ts'],
    ...typescript(),
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
