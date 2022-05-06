const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.70}',
    '{"nome": "Mochila", "preco": 57.80}',
    '{"nome": "Canela", "preco": 2.90}'
]

//Retornar array apenas com precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

//Convertendo os valores em um novo array
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

//Exibir o array convertido
console.log(resultado)