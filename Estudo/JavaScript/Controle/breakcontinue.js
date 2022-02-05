const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let indice in nums) {
    if (indice==5){
      break  
    } 
    console.log(`indice = ${indice} valor = ${nums[indice]}`)
}
console.log()

for (let indice in nums) {
    if (indice==5){
      continue  
    } 
    console.log(`indice = ${indice} valor = ${nums[indice]}`)
}
console.log()