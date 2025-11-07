import { fromURL } from 'cheerio'

const getJestRules = async (): Promise<string[]> => {
  const rules: string[] = []

  const $ = await fromURL(
    'https://github.com/jest-community/eslint-plugin-jest',
  )

  $('article.markdown-body tbody td:first-child')
    .each((index, element) => {
      rules.push(`jest/${$(element).text()}`)
    })

  return rules.sort()
}

export {
  getJestRules,
}
