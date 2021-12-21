function canCarry(capacity, trip) {
  const paradaMax = Math.max(... trip.reduce((acc, parada) => [...acc, parada[2]]))
  const paradas = Array.from({length: paradaMax}, (_, i) => i + 1)
  return paradas.reduce((regalosEncima, numParada) => {
    const parada = trip.filter(parada => parada[1] === numParada)[0] || null
    const paradasDejarRegalos = trip.filter(tmpParada => tmpParada[2] === numParada)
    const dejarRegalos = paradasDejarRegalos.reduce((acc, paradaDejarRegalo) => acc + paradaDejarRegalo[0], 0) || 0
    const cogerRegalos = parada ? parada[0] : 0
    regalosEncima = regalosEncima + cogerRegalos - dejarRegalos
    if (regalosEncima > capacity) {
      return false
    }
    return regalosEncima
  }, 0) === 0 ? true : false
}
 




console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]])) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]])) // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

console.log(canCarry(3, [[2, 1, 5],[3, 5, 7]])) // true -> nunca supera el máximo de capacidad
console.log(canCarry(4, [[2, 3, 8],[2, 5, 7]])) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

console.log(canCarry(1, [[2, 3, 8]])) // false -> no podría ni con el primer viaje
console.log(canCarry(2, [[1, 2, 4], [2, 3, 8]])) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
console.log(canCarry(11, [[3, 2, 7], [3, 7, 9], [8, 3, 9]])); // true
console.log(canCarry(5, [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8]])); // false