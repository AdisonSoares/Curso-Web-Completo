//Função factory
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

//Criando objeto
console.log(criarProduto('Notebook', 2199.50))
console.log(criarProduto('Desktop', 1100.50))
