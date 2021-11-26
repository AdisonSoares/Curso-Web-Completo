/*Quando colocamos duas exclamações antes de uma declaração
**transformamos ela em boleano "!!".*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = !!(trabalho1 ^ trabalho2)// Ou exclusivo xor
    const comprarTV32_2 = trabalho1 != trabalho2// Outra opção de xor
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50,comprarTv32,manterSaudavel}
}

console.log(compras(true,true))
console.log()

console.log(compras(false,true))
console.log()

console.log(compras(true,false))
console.log()

console.log(compras(false,false))
console.log()