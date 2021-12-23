function canReconfigure(from, to) {
  if (from.length !== to.length) return false
  const assign = {}
  for (const i in from) {
    if (Object.values(assign).some(value => value === to[i]) && assign[from[i]]!==to[i]) return false
    if (assign[from[i]] && assign[from[i]] !== to[i]) return false
    assign[from[i]] = to[i]
  }
  return true
}
 
var from = 'BAL'
var to   = 'LIB'
console.log(canReconfigure(from, to)) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

from = 'CON'
to   = 'JUU'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

from = 'MMM'
to   = 'MID'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

from = 'AA'
to   = 'MID'
console.log(canReconfigure(from, to)) // false -> no tiene la misma longitud

from = 'aaaDDDmmm'
to   = 'aaaDDDmmm'
console.log(canReconfigure(from, to)) // false -> no tiene la misma longitud

from = 'xxxMMM'
to   = 'aaaDDD'
console.log(canReconfigure(from, to))