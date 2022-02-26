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

//Simulando o operador new
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