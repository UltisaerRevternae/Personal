function drawGift(size, symbol) {
  const S = '#'
  let space = size;

  let top = " ".repeat(--space) + S.repeat(size) + '\n'
  let middle = S.repeat(size - 1) + S.padEnd(size - 1, symbol) + S + '\n'
  let bot = S.repeat(size) + '\n'
  let result = ''

  if (size === 1) return top

  for (let i = 0; i < size - 2; i += 1) {
    const spaces = " ".repeat(--space)
    const left = S.padEnd(size - 1, symbol)
    const rightTop = S.padEnd(i + 1, symbol) + S + '\n'
    const rightBot = S.padEnd(space, symbol) + S + '\n'

    top += spaces + left + rightTop
    middle += left + rightBot
  }

  result = top + middle + bot
  return result
}

console.log(drawGift(5, '*'))
// const topElements = spaces + left + rightTop
