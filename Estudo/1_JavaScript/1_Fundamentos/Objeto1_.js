/*Para se escrever um objeto usa-se um par de chaves {}.
**Caso se use um par de colchetes [] inicia-se um array.
**Quando se cria um objeto vazio pode-se colocar atributos,
**funções e comandos depois, de forma dinâmica.
**Em JS um objeto é a junção de chave e valor.
**O recomendável é evitar atributos com espaço.
**JSON não é a mesma coisa que objeto, ele é um formato
**textual.
**Um objeto é uma coleção de chave e valor.
**A partir de um objeto pode-se gerar um JSON.*/

const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1["Desconto legal"] = 0.40
console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    tamanho: "M"
}
console.log(prod2)

'{"nome": "Camisa Polo", "preco":79.90}'/*Isso é um JSON*/