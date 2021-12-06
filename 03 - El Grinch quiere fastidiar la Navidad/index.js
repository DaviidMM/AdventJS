function isValid(letter){
  return letter.includes("(")
    && letter.includes(")")
    && letter.split(/[\(\)]/)[1]!== ''
    && letter.split(/[\(\)]/)[1].match(/(\[|\{)/)===null
    && letter.match(/\(/g).length === letter.match(/\)/g).length
}


console.log(isValid("bici coche (balón) bici coche peluche"))
console.log(isValid("(muñeca) consola bici"))
console.log(isValid("bici coche (balón bici coche"))
console.log(isValid("peluche (bici [coche) bici coche balón"))
console.log(isValid("(peluche {) bici"))
console.log(isValid("() bici"))