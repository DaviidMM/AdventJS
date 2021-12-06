function listGifts(letter){
  var resultado = {}
  letter.split(" ")
    .filter(regalo => regalo.charAt(0)!== "_" && regalo!== "")
    .map( regalo => {
      resultado[regalo] = (resultado[regalo]|| 0 ) + 1
    })
  return resultado
}

const carta = 'bici coche balón _playstation bici coche peluche'

console.log(listGifts(carta))