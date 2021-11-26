/*O for in percorre as posição dos indices*/

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(`Posicao: ${i}, Valor ${notas[i]}`)
}

const pessoa = {
    nome: `Gil`,
    sobrenome: `Gomes`,
    idade: 30,
    peso: 64
}
console.log()

for (let atributosDoObjeto in pessoa) {
    console.log(`${atributosDoObjeto} = ${pessoa[atributosDoObjeto]}`)
}
console.log()