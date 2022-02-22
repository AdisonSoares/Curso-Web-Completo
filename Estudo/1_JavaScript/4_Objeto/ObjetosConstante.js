/*
Objetos e outros valores que são declarados como constantes
geralmente não mudam e não podem ser modificados ou deletados.
*/

//Nesse caso a constante é apenas a declaração "pessoa", mas seus dados não são.
const pessoa = {nome: 'Zelia'}
pessoa.nome = 'Janaina'
console.log(pessoa)

/*
Como a variavel "nome" não foi diretamente declarada como constante ela pode ser mudada.
Mas ao tentar mudar a declaração "pessoa", o sistema não aceita pois ela é
invariável por ser constante.
*/
//pessoa = {nome: 'Amália'} Erro

//Método para congelar o objeto, dessa forma não se consegue mexer nos elementos do objeto
Object.freeze(pessoa)

//Posso atribuir valores a um objeto congelado mas será ignorado, valendo apenas o que declarou antes
pessoa.nome = 'Joao'
console.log(pessoa)

//Quando um objeto está congelado não se pode atribuir de forma dinamica outros valores
//Não permite definição.
pessoa.nascimento = 1990
console.log(pessoa.nascimento)

//Não se pode deletar quando está congelada
delete pessoa.nome
console.log(pessoa)

//Criando um objeto constante congelado
const pessoaConstante = Object.freeze({nome: 'Amália'})
pessoaConstante.nome = 'Pedro'
console.log(pessoaConstante)