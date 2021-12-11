function shouldBuyFidelity(times) {
  var entradaNormal = 12 * times
  var entradaTarjetaFidelity = 250
  for (let i = 1; i <= times; i++) {
    entradaTarjetaFidelity += 12 * 0.75**i
  }
  return entradaTarjetaFidelity < entradaNormal
}

function shouldBuyFidelityReduce(times){
  // entradaNormal > entradaFidelity
  return 12*times > [...Array(times).keys()].reduce( (acc, i) => acc + 12*0.75**(i+1), 250)
}



console.log(shouldBuyFidelityReduce(3)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(3)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelityReduce(100)) // true -> Mejor comprar tarjeta fidelidad