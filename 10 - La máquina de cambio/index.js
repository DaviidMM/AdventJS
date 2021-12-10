const coins = [1, 2, 5, 10, 20, 50]
// Solución con bucle for
function getCoins(change) {
  var cambio = Array(coins.length).fill(0)
  for (let i = coins.length-1; i >= 0; i--) {
    if(change / coins[i] >= 1){
      cambio[i] = Math.floor(change / coins[i])
      change = change % coins[i]
    }
  }
  return cambio
}

// Solución con .map()
function getCoins2(change){
  return [...coins].reverse().map( coin => {
    let neededCoins = Math.floor(change / coin)
    change = change % coin
    return neededCoins
  }).reverse()
}

// Solución con .reduce()
function getCoins3(change){
  return [...coins].reverse().reduce( (acc, coin, i) => {
    acc[i] = Math.floor(change / coin)
    change = change % coin
    return acc;
  }, Array(coins.length).fill(0)).reverse()
}


console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins2(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins3(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos

console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins2(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins3(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2

console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins2(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins3(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos

console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins2(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins3(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10

console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
console.log(getCoins2(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
console.log(getCoins3(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos