const a = 1
const b = 2
const c = 3

//Modo antigo de criar objetos e atribuir os valores das variaveis criadas
const obj1 = {a: a, b: b, c: c}

//Modo atual de criar objetos e atribuir os valores das variaveis criadas
const obj2 = {a, b, c}

//Exibição
console.log(obj1)
console.log()

console.log(obj2)
console.log()

//Objetos criados de uma string
const nomeAtribuido = 'Nota'
const valorAtribuido = 8.50

const obj3 = {}
obj3[nomeAtribuido] = valorAtribuido
console.log(obj3)

const obj4 = {[nomeAtribuido]:valorAtribuido}
console.log(obj4)

//Definir funções dentro de um objeto literal
const obj5 = {
    //Forma antiga
    funcao1: function(){
        //Implementação
    },
    //Forma atual
    funcao2() {
        //Implementação
    }
}

console.log(obj5)