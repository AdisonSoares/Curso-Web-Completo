/*Exemplos de funções
Objeto é uma coleção de chaves(keys) e valores(values)*/
const pessoa = {
    nome: 'Andre',
    idade: 48,
    peso: 77
}

//Acessar as chaves de um objeto - Array
console.log(Object.keys(pessoa))
console.log()

//Acessndo os valores de um objeto - Array
console.log(Object.values(pessoa))
console.log()

//Acessndo chaves e valores de um objeto - Arrays
console.log(Object.entries(pessoa))
console.log()

//Percorrendo o valores do objeto - Arrays
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})
console.log()

//Percorrendo o valores do objeto - Arrays destructuring
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})
console.log()

/***************************************************************************/

/*DEFINIR PROPRIEDADE - DEFINIR CARACTERISTICAS DE DETERMINADA PROPRIEDADE DE UM OBJETO*/


//É passado no parametro o objeto e o nome da propriedade criada
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//Poderá ser listada?
    writable: false,//Poderá ser editada?
    value: '01/02/2022' //Atribuição de valor
})

//Exibindo
console.log(pessoa.dataNascimento)
console.log()

//Não é possivel atribuir valores pois foi "congelado" invalidando a edição "writable"
pessoa.dataNascimento = '01/02/2001'
console.log(pessoa.dataNascimento)
console.log()

//Nova lista a partir da nova inclusão - Permitido por validar "enumerable"
console.log(Object.keys(pessoa))
console.log()

/***************************************************************************/

//Object.assign (ECMAScript 2015)
/*Objeto que usa como parâmetros outros objetos, e concatena os objetos sobrescritos.*/

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

//Exibindo
console.log(obj)