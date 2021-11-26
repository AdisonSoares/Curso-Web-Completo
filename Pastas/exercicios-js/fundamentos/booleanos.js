/*Pode-se inverter o valor lógico de uma afirmação
**colocando antes dela um ponto de exclamação !, caso
**sejam colocadas duas vezes ela mostrará o valor
**lógico original.*/

let isAtivo;

isAtivo = false
console.log(isAtivo)
console.log(!isAtivo)//Negação da afirmação anterior
console.log()

isAtivo = true
console.log(isAtivo)
console.log(!isAtivo)//Negação da afirmação anterior
console.log()

isAtivo = 1
console.log(isAtivo)

isAtivo = 1//Esse número pode ser atribuido para verdadeiro
console.log(!isAtivo)//Negando que o 1 é um valor

isAtivo = 1
console.log(!!isAtivo)//Afirmando que o 1 é um valor
console.log()

console.log("Valores verdadeiros")
console.log(!!-3)
console.log(!!-1)
console.log(!!' ')//Tem espaço dentro
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))//Se a atribuição for verdadeira, a sentença é verdadeira
console.log()

console.log("Valores falsos")
console.log(!!0)//Zero pode ser atribuido para falso
console.log(!!'')//Não tem espaço dentro, pode verificar String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))//Se a atribuição for falsa, a sentença é falsa
console.log()

console.log("Outras informações")
console.log(!!(''||null||0||' '))//Condicional ou (||), se um for verdadeiro toda a sentença é verdadeira
console.log((''||null||0||'Olá'))//Retorna o único valor verdadeiro encontrado
console.log()

//Exemplo prático de uso lógico
let nome

nome = ''
console.log(nome || "Nome não preenchido")//Retornou o valor verdadeiro, o vazio é falso
console.log()

nome = 'Ariosvaldo'
console.log(nome || "Nome não preenchido")//Retorna a primeira opção de verdadeiro