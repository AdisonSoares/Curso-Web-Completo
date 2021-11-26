let a = 3//arquivo local
global.b = 123

this.c = 456
this.d = false
this.e = "teste"

console.log(this.a)
console.log(a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)