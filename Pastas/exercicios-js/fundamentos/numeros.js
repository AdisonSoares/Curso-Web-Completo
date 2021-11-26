var peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log()

//Testar se a variável é inteira
peso1 = 1.0//Verdadeiro para inteiro
console.log(Number.isInteger(peso1))
console.log()

peso1 = 1.1//Falso para inteiro
console.log(Number.isInteger(peso1))
console.log()

//Outro exemplo
const av01 = 9.871
const av02 = 6.871

const total = av01 * peso1 + av02 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log()

//Sem muitas casas decimais
console.log(media.toFixed(2))
console.log()

//Converter numero para string
console.log(media.toString())
console.log()

//Converter numero para binário
console.log(media.toString(2))
console.log()