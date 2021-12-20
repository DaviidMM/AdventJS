function pangram(letter) {
  const abc = "abcdefghijklmnñopqrstuvwxyz".split('')
  letter = letter.normalize().toLowerCase();
  return abc.every(character => letter.includes(character))
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibe!')) // false
console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false