/*
O objeto é uma coleção dinamica de pares chave/valor
Em JS os objetos são uma coleção dinamica podem ser acrescentados */

//Forma de criar objetos
const produto = new Object

//Atribuir valores ao objeto criado
produto.nome = 'Cadeira'
produto.preco = 150
produto['Marca do produto'] = 'Generica'

//Exibir os dados 
console.log(produto)
console.log()

//Deletar dados
delete produto.preco
delete produto['Marca do produto']

//Exibir os dados 
console.log('Depois de deletar')
console.log(produto)
console.log()

//Objeto contendo objetos
const carro = {
    modelo: 'BMW',
    valor: 300000,
    proprietario: {
        nome: 'Paulo',
        idade: 40,
        endereco: {
            cidade: 'Brasilia',
            bairro: 'Aguas claras',
            numero: 456
        }
    },
    //Vetor de objetos
    condutores:[{
        nome: 'Rafael',
        idade: 31
    },{
        nome: 'Julia',
        idade:27
    }],
    //Funções
    calcularValorSeguro: function(){
        //Valor do seguro
    }
}

//Acessar os dados do objeto por meio da notação ponto
carro.proprietario.endereco.numero = 1000

//Acessar os dados do objeto por meio da notação colcheque - mais trabalhoso
carro['proprietario']['endereco']['bairro'] = 'Lago sul'

//Exibindo os dados
console.log('Depois de acrescentar')
console.log(carro)
console.log()

//Deletar objetos, e funções
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

//Exibindo os dados
console.log('Depois de deletar')
console.log(carro)
console.log(carro.condutores)//Mesmo não tendo valores exibe undefined
//console.log(carro.condutores.length)//Apresenta um problema
console.log()