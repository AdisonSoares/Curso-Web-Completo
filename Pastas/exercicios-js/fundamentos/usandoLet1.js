/*O tipo Let, diferente do tipo Var, reconhece seu escopo dentro de um
**bloco de códico, chaves, então não torna um elemento global, mostrando
**o conteúdo apenas dentro do bloco.*/

var numero1 = 1
{
    let numero1 = 2
    console.log("dentro: ",numero1)
}
console.log("fora: ",numero1)
console.log()

let numero2 = 1
{
    let numero2 = 2
    console.log("dentro: ",numero2)
}
console.log("fora: ",numero2)
console.log()

let numero3 = 1
{
    let numero4 = 2
    console.log("dentro: ",numero3)
}
console.log("fora: ",numero3)