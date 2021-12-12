function getMinJump(obstacles) {
  var jump = 1;
  for (let i = 0; i <= Math.max(...obstacles); i = i+jump) {
    if(obstacles.includes(i)){
      i = 0;
      jump++
    }
  }
  return jump
}

function getMinJump2(obstacles){
  if(obstacles.length === 0) return 1
  for (let jump = 2; jump <= Math.max(...obstacles)+1; jump++) {
    if(obstacles.every(obstacle => obstacle % jump !== 0)){
      return jump
    }
  }
}

var obstacles = [5, 3, 6, 7, 9]
console.log(getMinJump2(obstacles)) // -> 4

obstacles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(getMinJump2(obstacles)) // -> 11

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

obstacles = [2, 4, 6, 8, 10]
console.log(getMinJump2(obstacles)) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/