/*Deixando o JS mais rigido para se ter mais solidez nos códigos.*/


/*Object.preventExtensions.
Ele previne, não permite, que o objeto tenha mais atributos
adicionados, é permitido excluir e alterar atributos mas não adicionar."*/
const produto = Object.preventExtensions({
    nome:'Kuat',
    preco: 7.80,
    tag: 'promoção'
})

//Verificar se é um objeto extensivel
console.log('Extensivel:', Object.isExtensible(produto))

//Alterando um atributo do objeto - permitido
produto.nome = 'Sprite'

//Criando novos atributos - não permitido
produto.descricao = 'Refrigerante sabor guarana'

//Deletando atributos - permitido
delete produto.tag

//Exibindo dados
console.log(produto)
console.log()

/*********************************************************************************/

/*Object.seal.
Essa propriedade sela o objeto, não possibilitando adicionar, excluir
mas pode modificar dados do atributo criados.*/
const pessoa = {
    nome: 'Marilia',
    idade: 29
}

//Selando o objeto
Object.seal(pessoa)

//Verificar se o objeto está selado
console.log('Selado:', Object.isSealed(pessoa))

//Adicionar e excluir atributos - não permitido
pessoa.sobrenome = 'Silva'
delete pessoa.nome
console.log(pessoa.sobrenome)
console.log(pessoa.nome)
console.log()

//Editando os atributos - permitido
pessoa.idade = 31
console.log(pessoa.idade)
console.log()

/*********************************************************************************/

/*Object.freeze.
É um objeto selado com atributos constantes, não se pode incluir novos valores,
não pode excluir chaves do objeto e não pode modificar dados das variáveis.*/

//Nesse caso a constante é apenas a declaração "pessoa", mas seus dados não são.
const pessoa = {nome: 'Zelia'}
pessoa.nome = 'Janaina'
console.log(pessoa)


//Método para congelar o objeto, dessa forma não se consegue mexer nos elementos do objeto
Object.freeze(pessoa)