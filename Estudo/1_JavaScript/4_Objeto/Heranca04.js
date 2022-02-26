/*Entendendo a função prototype e o seu atributo.
A questão é saber se uma função objeto serve como prototype.
Quando um objeto é instanciado a partir da função ela é igual ao prototipo pai,
pois a função objeto também tem um conexao com object.prototype*/

function MeuObjeto(){}

//Exibindo o atributo da função que é prototype - Objeto vazio
console.log(MeuObjeto.prototype)

//Criando objetos a partir da função, instâncias
const objeto1 = new MeuObjeto
const objeto2 = new MeuObjeto

//Verificando para onde os objetos criado vão apontar
console.log(objeto1.__proto__===objeto2.__proto__)
console.log(MeuObjeto.prototype===objeto1.__proto__)
console.log()

//Atribuindo valores ao objeto pai
MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.mensagem = function(){
    console.log(`Olá! Meu nome é ${this.nome}`)
    console.log()
}

//Exibindo dados
objeto1.mensagem()

objeto2.nome = "Antonio"
objeto2.mensagem()

//Criar novo objeto com atribuição manual de herança
const objeto3 = {}
objeto3.__proto__ = MeuObjeto.prototype
objeto3.nome = "Objeto3"
objeto3.mensagem()

//Resumindo o conteudo
console.log((new Object).__proto__ === MeuObjeto.prototype)
console.log()

console.log(MeuObjeto.__proto__ === Function.prototype)
console.log()

console.log(Function.prototype.__proto__ === Object.prototype)
console.log()

//Limite do prototipo
console.log(Object.prototype.__proto__ === null)
console.log()