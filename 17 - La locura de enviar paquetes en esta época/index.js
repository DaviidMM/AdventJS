function countPackages(carriers, carrierID) {
  const carrier = carriers.filter(carrier => carrier[0] === carrierID)[0]
  return carrier[2].reduce((packages, subCarrier) => {
    return packages + countPackages(carriers, subCarrier)
  }, carrier[1])
}
 





const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

console.log(countPackages(carriers, 'dapelu')) // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9


const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

console.log(countPackages(carriers2, 'camila')) // 15