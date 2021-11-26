/*Em via de regra o melhor é usar o estritamente igual"==="
**pois, pode haver dois valores iguais mas com tipos diferentes.*/

console.log("01)", "1" ==1)//Não compara o tipo e sim o valor
console.log("02)", "1" ===1)//Estritamente igual, mesmo tipo
console.log("03)", "3" !=3)//Não compara o tipo e sim o valor
console.log("04)", "3" !==3)//Estritamente diferente, mesmo tipo

console.log("05)",3<2)
console.log("06)",3>2)
console.log("07)",3<=2)
console.log("08)",3>=2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log("09)",d1===d2)//Comparando referência de memória
console.log("09)",d1==d2)//Comparando referência de memória
console.log("11)",d1.getTime ===d2.getTime)

console.log("12)",undefined == null)
console.log("13)",undefined === null)