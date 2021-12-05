function createXmasTree(height) {
  if(height < 1 || height > 100 || !Number.isInteger(height)) return "La altura debe estar entre 1 y 100 y ser un número entero."
  var tree = "";
  var maxWidth = 2*(height-1)+1;
  // Hojas
  for(let i = 0; i < height; i++){
    let leaves = 2*i+1; // Hojas en cada fila
    let spaces = (maxWidth - leaves)/2; // Espacios a los lados de cada fila del arbol
    tree += `${"_".repeat(spaces)}${"*".repeat(leaves)}${"_".repeat(spaces)}\n`;
  }
  // Tronco
  tree += `${"_".repeat((maxWidth-1)/2)}#${"_".repeat((maxWidth-1)/2)}\n`
  tree += `${"_".repeat((maxWidth-1)/2)}#${"_".repeat((maxWidth-1)/2)}`
  return tree
}

// 🎄
console.log(createXmasTree(5));