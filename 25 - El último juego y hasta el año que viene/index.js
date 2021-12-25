function canMouseEat(direction, game) {
  const mousePosition = game.reduce((position, row, i) => {
    const x = row.indexOf('m')
    return x === -1 ? position : {x: x, y: i}
  }, {})
  const targetPosition = {...mousePosition};
  if (direction === 'up' && mousePosition.y !== 0) targetPosition.y = mousePosition.y - 1
  if (direction === 'down' && mousePosition.y !== game.length - 1) targetPosition.y = mousePosition.y + 1
  if (direction === 'left' && mousePosition.x !== 0) targetPosition.x = mousePosition.x - 1
  if (direction === 'right' && mousePosition.x !== game[0].length - 1) targetPosition.x = mousePosition.x + 1
  if(game[targetPosition.y][targetPosition.x] === '*') return true
  return false
}







const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

console.log(canMouseEat('up',    room))   // false
console.log(canMouseEat('down',  room))   // true
console.log(canMouseEat('right', room))   // false
console.log(canMouseEat('left',  room))   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

console.log(canMouseEat('up',    room2))   // false
console.log(canMouseEat('down',  room2))   // false
console.log(canMouseEat('right', room2))   // true
console.log(canMouseEat('left',  room2))   // false