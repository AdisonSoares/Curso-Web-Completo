/*Reduce é uma função que serve tranformar um array
* em um outro elemento que será definido*/

const alunos = [
    {nome: 'Pedro', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Adriano', nota: 9.8, bolsista: true},
    {nome: 'Sandro', nota: 8.7, bolsista: false}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)