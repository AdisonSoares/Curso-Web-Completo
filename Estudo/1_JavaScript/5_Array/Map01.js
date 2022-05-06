/*Dentro do map existe um laço, ele  mapeia um array 
para outro array do mesmo tamanho, nao transforma cria um novo.
O map eh um laco for com proposito.*/

//Criação de array
const nums = [1, 2, 3, 4, 5]


//Transformar o mesmo array colocando outros elementos, recebendo 3 parametros
let resultado = nums.map(function(e){
    return e * 2
})

//Exibindo o array 
console.log(resultado)

//Funcoes dentro do map passar como calbek
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//Modificando os valores do array e criando um novo array com esses valores
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

//Exibindo o array 
console.log(resultado)