/*Função sem retorno
**Uma função vem associada a um bloco.
**Ao se colocar mais valores de uma variável o sistema faz o calculo
**com o que foi limitado no parâmetro e ignora o restante.*/

function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma()
imprimirSoma(2,1,5,8,9)
console.log()

//Função com retorno
function soma(a,b=1){
    return a+b
}
console.log(soma(2,3))
console.log(soma(2))
console.log()


function soma2(a=2,b=4){
    return a+b
}
console.log(soma2())
console.log()