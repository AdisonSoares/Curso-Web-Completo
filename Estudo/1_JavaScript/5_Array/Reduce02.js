/*Antes de usar o reduce é preciso usar o map*/

const alunos = [
    {nome: 'Pedro', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Adriano', nota: 9.8, bolsista: true},
    {nome: 'Sandro', nota: 8.7, bolsista: false}
]

//Verificar se todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Verificar se ao menos um aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))