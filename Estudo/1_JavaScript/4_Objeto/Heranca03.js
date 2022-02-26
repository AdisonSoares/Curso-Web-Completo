/*Uso do Object.create*/

const pai = {
    nome: 'Adriano',
    corCabelo: 'preto'
}

//Objeto novo tendo como protótipo o objeto pai
const filha1 = Object.create(pai)

//Editando o objeto filha01
filha1.nome = "Julia"

//Exibição
console.log(filha1.corCabelo)
console.log()

//Objeto novo tendo como protótipo o objeto pai, com acrescimo de funções próprias no parametro
const filha2 = Object.create(pai, {
    nome: {
        value: 'Bianca',
        writable: false,
        enumerable: true
    }
})

//Exibindo dados
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log()

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log()

/*Verificar se determinada função pertence ao objeto ou se é herança.
O termo "hasOwnProperty" serve para perguntar se determinada propriedade
pertence a filha2.
No retorno do console é mostrado que nome pertence ao objeto e 
corCabelo é um atributo herdado.*/
for (const key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}