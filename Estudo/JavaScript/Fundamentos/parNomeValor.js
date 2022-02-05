//par Nome/Valor

const saudacao = "Eeee aiiiii"//Contexto lexico 1

function exec() {
    const saudacao = "Olá dentro da função"//Contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco:{
        logradouro:"Qnl 26 lote",
        numero: 15
    }
}

//Exibição
console.log(saudacao)
console.log()

console.log(exec())
console.log()

console.log(cliente)
console.log()