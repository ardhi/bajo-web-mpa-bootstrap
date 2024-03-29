function getSizing (value, context) {
  const { get, keys } = this.scope.bajoWebMpa.util
  const sizing = get(context, 'ctx.theme.mapping.sizing', {})
  return keys(sizing).includes(value) ? sizing[value] : null
}

export default getSizing
