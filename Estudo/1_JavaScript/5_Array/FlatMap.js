/*Objetivo é extrair as notas de todos os alunos.
 *O flatmap é um array associado com um concat, que nesse
 * exemplo vai juntas os dois arrays em um só.*/

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

//Extraindo a nota de dentro do aluno
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)

//Exibindo
console.log(notas1)

//Objetivo a ser alcançado
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

//Organizando o flatmap
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)

//Exibindo
console.log(notas2)
