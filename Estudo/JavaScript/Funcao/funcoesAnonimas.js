const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

/*Funções anonimas*/
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

/*Arrow function*/
imprimirResultado(3, 4, (x, y) => x * y)

/*Função dentro de um objeto*/
const pessoa = {
    falar: function(){
        console.log('Olá!')
    }

}
pessoa.falar()