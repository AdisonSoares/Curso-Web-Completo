/*Uso do operador new, na instancianção de objetos*/

//Criação do objeto por meio de função
function Aula(nome, videoID){
    this.nome = nome,
    this.videoID = videoID
}

//Instanciando objetos
const aula1 = new Aula('Seja bem vindo!', 123)
const aula2 = new Aula('Até mais!', 456)

//Exibindo dados
console.log(aula1)
console.log()

console.log(aula2)
console.log()

/*Simulando o operador new
Como o objetivo é simular o new e não usa-lo,
usa-se anotação literal de objeto __proto__.
O prototipo do objeto criado deve apontar para funçao.prototype(f.prototype).
Depois chama-se a função "f" no parametro e chamar a função apply desse parametro.
O 3 pontos do segundo parametro aponta um conjunto de array "...parametros".
No fim retorna o objeto criado.*/
function novo(f,...parametros){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, parametros)
    return obj
}

//Criando objetos
const aula3 = novo(Aula,'Seja bem vindo!',741)
const aula4 = novo(Aula,'Até mais!', 852)


//Exibindo dados
console.log(aula3)
console.log()

console.log(aula4)
console.log()