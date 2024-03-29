import preParse from './pre-parse.js'

const mapping = {
  font: 'f'
}

const sides = {
  size: 's',
  weight: 'w',
  style: 'st'
}

function parseDirectSpacing ({ attr, key, context }) {
  const { rkey, items } = preParse.call(this, { attr, key, context }, mapping)
  const { kebabCase } = this.scope.bajoWebMpa.util
  for (const i of items) {
    const parts = kebabCase(i).split('-')
    if (parts.length >= 2) {
      const side = sides[parts[0]]
      parts[0] = side ?? parts[0]
      attr.class.push(`${rkey}${parts.join('-')}`)
    } else attr.class.push(`${key}-${parts[0]}`)
  }
  return true
}

export default parseDirectSpacing
