function missingReindeer(ids) {
  const index = ids
    .indexOf(ids.sort((a, b) => a - b)
    .filter((reno, i) => reno !== i)[0])
  return index === -1 ? Math.max(...ids)+1 : index
}






console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)
console.log(missingReindeer([0, 32, 63, 5, 62, 93, 89, 61, 39, 98, 13, 80, 22, 91, 73, 84, 60, 90, 38, 55, 65, 28, 45, 30, 71, 21, 88, 58, 81, 29, 46, 77, 64, 34, 83, 8, 1, 70, 86, 72, 2, 69, 87, 57, 97, 53, 96, 95, 42, 4, 31, 40, 3, 15, 6, 92, 43, 24, 19, 20, 67, 26, 9, 25, 47, 36, 74, 100, 12, 16, 79, 44, 59, 99, 37, 7, 75, 11, 27, 78, 23, 85, 10, 35, 76, 49, 94, 50, 56, 82, 54, 68, 52, 66, 33, 51, 17, 14, 41, 18, 48])) // -> 101 (¡es el último que falta!)