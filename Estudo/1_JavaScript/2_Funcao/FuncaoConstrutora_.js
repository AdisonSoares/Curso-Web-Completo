function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0

    //Método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta

        }else{
            velocidadeAtual=velocidadeMaxima
        }
    }

    //Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

//Objeto instanciado
const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
console.log()

//Objeto instanciado
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
console.log()

//Visualizando o tipo de cada
console.log(typeof Carro)
console.log(typeof uno)
console.log(typeof ferrari)
console.log()