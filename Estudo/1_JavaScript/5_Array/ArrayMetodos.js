
//Criando um array
const pilotos = ['Vetel', 'Alonso', 'Raikonen', 'Massa']

//Remove o ultimo elemento de um array
pilotos.pop() 

//Exibindo o array
console.log(pilotos)

//Acrescentar na ultima posicao do array
pilotos.push('Montoya')

//Exibindo o array
console.log(pilotos)

//Remove o primeiro elemento de um array
pilotos.shift() 

//Exibindo o array
console.log(pilotos)

//Adicionando o primeiro elemento de um array
pilotos.unshift('Hamilton') 

//Exibindo o array
console.log(pilotos)

//Adicionar com o metodo splice, primeiro define a posicao (2)  e quantos vai eliminar (0)
pilotos.splice(2, 0, 'Bottas', 'Massa')

//Exibindo o array
console.log(pilotos)

//Remover com o metodo splice, primeiro define a posicao (3)  e quantos vai eliminar (1)
pilotos.splice(3, 1)

//Exibindo o array
console.log(pilotos)

//Retornar um novo array com metodo slice, a partir no indice definido (2)
const algunsPilotos1 = pilotos.slice(2)

//Exibindo o array
console.log(algunsPilotos1)

//Retornar um novo array com metodo slice, a partir no indice definido (1) até o limite (4) que nao entra.
const algunsPilotos2 = pilotos.slice(1, 4)

//Exibindo o array
console.log(algunsPilotos2)