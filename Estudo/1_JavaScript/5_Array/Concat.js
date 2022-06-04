/*A ideia do cancat é concatenar varios arrays em um unico array ou 
varios elementos como paramentros e esses elementos são concatenados 
em um novo array.*/

const filhos = ['Wilson', 'Andre']
const filhas = ['Ana', 'Yara']
const todos = filhas.concat(filhos, 'Alex')

//Exibindo
console.log(filhos)
console.log(filhas)
console.log(todos)

//Concatenando um array vazio
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))