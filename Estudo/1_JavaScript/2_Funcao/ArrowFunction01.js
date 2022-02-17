/*A função arrow é anonima, sintaxe e funções reduzidas*/

let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
/*Retorno implicito - Arrow*/
dobro = a => 2 * a
console.log(dobro(Math.PI))

/***************************************************************/

let ola = function(){
    return 'Olá!'
}

/*Função arrow*/
/*Função sem parametros*/
ola = () => 'Olá!'
/*Função com parametros*/
ola = _ => 'Olá!'
/*Não é obrigado a declarar o parametro*/
console.log(ola())
