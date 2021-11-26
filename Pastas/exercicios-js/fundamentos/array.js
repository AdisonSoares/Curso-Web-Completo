const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)
console.log()

//Função para adicionar novos elementos ao array
valores.push({id:3}, false, null, 'teste')
console.log(valores)
console.log()

//Funçao para tirar o último valor do array
console.log(valores.pop())
console.log(valores)
console.log()

delete valores[0]
console.log(valores)
console.log()

console.log(typeof valores)//Tipo Objeto