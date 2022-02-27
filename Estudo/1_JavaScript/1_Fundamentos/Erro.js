/*Uso de try catch para tratamento de erros*/

function tratarErroELancar(erro){
    throw new Error("Erro detectado")
    //throw significa lançar
}
function imprimirNome(obj){
    try {
        console.log(obj.name.toUpperCase()+"!!!!")   
    } catch (erro) {
        tratarErroELancar(erro)
    }finally{
        console.log("final - finally")
    }
}
const obj = {nome:"Roberval"}// o erro está em nome/name
imprimirNome(obj)
