/*Diferença entre usar e não usar o callback*/

/*Objetivo é pegar o array de notas e gerar um novo array
com as notas menores que 7*/
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

/*Selecionar uma nova array sem o callback*/
const notasBaixas01 = []
for (let i in notas) {
    if (notas[i]<7) {
        notasBaixas01.push(notas[i])
    }
}
console.log(notasBaixas01)

/*Selecionar uma nova array com o callback*/
const notasBaixas02 = notas.filter(function(nota){
    return nota<7
})
console.log(notasBaixas02)

/*Selecionar uma nova array com o callback e arrow*/
const notasBaixas03 = notas.filter(nota => nota<7)
console.log(notasBaixas03)