const emojis = [
  '😀',
  '😁',
  '😂',
  '😃',
  '😄',
  '😅',
  '😌',
  '😍',
  '😜',
  '😝',
  '😡',
  '😱',
]

const addEmoji = () => {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)]
  console.log(`\x1b[34m${emoji}\x1b[89m`)
}

module.exports = {
  addEmoji,
}