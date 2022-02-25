/*Umas das formas de se ter encapsulamento em um codigo é criar atributos
privados e ter métodos de alteração e leitura desses atributos de forma controlada

Esses atributos controladores são os Get(ler) e Set(Alterar).

OBS: JS não aceita sobrecarga de método a não ser no exemplo de get e set.*/

const sequencia = {
    _valor: 1, //Convenção - Pretenção de acesso apenas interno dentro do objeto sequencia
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

/*Acessando os valores - O JS entente que ao fazer a chamada do método valor duas vezes,
o que se quer é acessar o get e set, sendo que o primeiro mostra o get e o segundo o set*/
console.log(sequencia.valor, sequencia.valor)

//Inserindo valores
sequencia.valor = 1000

//Exibindo
console.log(sequencia.valor,sequencia.valor)

//Caso tente trazer um valor menor o sistema vai ignorar

//Inserindo valores
sequencia.valor = 900

//Exibindo
console.log(sequencia.valor,sequencia.valor)