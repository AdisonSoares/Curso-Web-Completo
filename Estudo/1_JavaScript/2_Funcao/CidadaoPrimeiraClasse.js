/*Função em JS é First-Class Object (Citizens).
**Higher-order function.
**Função pode ser tratado como um dado.*/

/*Criar função de forma literal*/
function funcao01() {
}

/*Armazenar função em uma variavel*/
const funcao02 = function () {
}

/*Armazenar função em um array*/
const array = [function (a, b) { return a + b }, funcao01, funcao02]
console.log(array[0](2, 3))

/*Armarzenar função em um atributo de objeto*/
const objeto = {}
objeto.falar = function () { return `Olá!` }
console.log(objeto.falar())

/*Passar função como parametro*/
function run(funcao03) {
    funcao03()
}
run(function () { console.log(`Executando...`) })

/*Uma função pode retornar/conter uma função*/
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais=soma(2,3)
cincoMais(4)
