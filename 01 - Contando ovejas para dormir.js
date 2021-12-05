function contarOvejas(ovejas){
  return ovejas.filter( ({name, color}) => {
    return name.toLowerCase().includes("a") && name.toLowerCase().includes("n") && color.toLowerCase() === "rojo"
  })
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]

console.log(contarOvejas(ovejas))