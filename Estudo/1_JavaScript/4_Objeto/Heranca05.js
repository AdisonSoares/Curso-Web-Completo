/*Funcionalidades do prototipo.
Toda a funçao tem um atributo ".prototype"*/

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
console.log()



//Uso desse conceito
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Programacao em JS - Heranca 5'.reverse())
console.log()



Array.prototype.first = function(){
    return this[0]
}



console.log([1,2,3,4].first())
console.log()


console.log(['a','b','c','d'].first())
console.log()

