function sumPairs(numbers, result) {
  for(let actualIndex=0; actualIndex < numbers.length; actualIndex++){
    let actualNum = numbers[actualIndex];
    let neededNum = result - actualNum;
    let neededNumIndex = numbers.indexOf(neededNum)
    if(neededNumIndex === actualIndex) continue;
    if(neededNumIndex !== -1){
      return [actualNum, neededNum];
    }
  }
  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]