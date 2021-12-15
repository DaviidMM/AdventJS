function checkSledJump(heights) {
  const max = {
    value: Math.max(...heights),
    index: heights.indexOf(Math.max(...heights))
  };
  var sube = false;
  var baja = false;
  var lastHeight = null;
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    if (height === lastHeight) return false
    if (i > max.index) {
      baja = true
      if (lastHeight < height) return false
    }
    sube = true
    lastHeight = height
  }
  return sube && baja
}




console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!