
//Demonstracao de um objeto e não array
const quaseArray = {0: 'Ana', 1: 'Beatriz', 2: "Rogerio"}

//Exibindo
console.log(quaseArray)

//Simular a impressao do console como se fosse array
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})

//Exibindo a partir do indice
console.log(quaseArray[0])

//Criando array
const meuArray = ['Ana', 'Beatriz', 'Rogerio']

//Exibindo
console.log(quaseArray.toString(), meuArray )