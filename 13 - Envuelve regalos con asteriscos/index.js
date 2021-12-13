function wrapGifts(gifts) {
  return gifts.reduce((acc, gift, i) => {
    if (gifts.length === 0) return acc
    if (acc.length === 0) acc = [`*${'*'.repeat(gift.length)}*`]
    return gifts.length === i+1 ? [...acc, `*${gift}*`, `*${'*'.repeat(gift.length)}*`] : [...acc, `*${gift}*`]
  }, [])
}






console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/