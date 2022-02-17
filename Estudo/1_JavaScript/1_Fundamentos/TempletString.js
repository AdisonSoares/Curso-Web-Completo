/*No meio de uma String não pode haver quebra
**de linha.
No templateString pode haver quebra de linha, ele é
**aberto com o símbolo da crase.
**É possível colocar dentro do templateString expressões
**matemáticas, porém deve ser fora do espaço entre crases
**de preferência depois do $ e entre chaves{}.
**É possível, dentro de uma templateString, chamar uma
**função.*/

const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const templateString = `
    Olá
    ${nome}!`
console.log(concatenacao)
console.log(templateString)
console.log(`1+1 = ${1+1}`)

//Função para converter uma String em maiúscula
const up = texto => texto.toUpperCase()

//Chamando a função no templateString
console.log(`Ei...${up("cuidado")}!`)
