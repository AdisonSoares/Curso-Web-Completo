/*Outra forma de percorrer um array com um proposito, ele serve para filtrar o array.
* Quando precisar transformar um array em outro use o map 
* Se precisar filtrar um array use o filter.
* No filter o array resultante normalmente é menor ou igual que o original.
* É preciso determinar uma logica para gravar ou não os elementos do array original.*/

/*Versão simples do filter, o this é o array*/
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i<this.length; i++){
        if(callback([i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'Mouse', preco: 149, fragil: true},
    {nome:'Teclado', preco: 258, fragil: true},
    {nome:'Copo plastico', preco: 2499, fragil: false}
]

//O filter vai filtrar um array lidando com os dados de acordo com o criterio do filter
console.log(produtos.filter(function(p) {
    return p.preco > 1000 && p.fragil 
}))

//Ou

const caro = produto => produto.preco >=1000
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))