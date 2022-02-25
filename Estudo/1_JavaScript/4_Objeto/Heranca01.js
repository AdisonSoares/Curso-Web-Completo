/*Herança é um dos principios derivados de orientação a objetos, que tem como objetivo
reusar códigos de forma mais simples, tem como desvantagem ter apenas um objeto
para passar herança sendo que composição pode ter um objeto que pode compor
varios outros objetos.

A herança em JS é baseada em prototipos, quando se pretende acessar uma função
ou variavel, primeiro o sistema procura dentro do escopo da função que esta acessando
caso não ache o sistema vai procurar pelo escopo mais próximo fora da função, onde
existem uma referencia de ligação, que seria o protótipo, o objeto acima.

Toda vez que se cria um objeto ele aponta para o objeto maior, até chegar em "Object",
porém pode-se mudar o prototipo de um objeto.

O atributo "Object.prototype", está disponivel apenas em object, que é uma função.*/

const ferrari = {
    modelo: 'F40',
    velocidade: 320
}

const volvo = {
    modelo: 'V40',
    velocidade: 300
}

/*Acessando o prototipo do objeto pelo comando __proto__(objeto pai - super),
vai procurar primeiro em ferrari, caso não encontre, procura em proto.
No exemplo, vai mostrar que é vazio.*/
console.log(ferrari.__proto__)
console.log()

//Verifivar se o objeto está apontado para prototype
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)
console.log()

//Verificar se o prototype tem um outro prototype acima, nesse exemplo aponta nulo.
console.log(Object.prototype.__proto__)
console.log()

//Testes com objeto
function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object, typeof MeuObjeto)