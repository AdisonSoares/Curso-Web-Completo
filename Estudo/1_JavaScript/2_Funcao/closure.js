/*Closure é o escopo criado no momento de declaração de uma função,
permite à função acessar e manipular variáveis externas à função,ela é
o contexto lexico em ação.*/

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
console.log(fora())