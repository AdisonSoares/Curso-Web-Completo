/*Quando não se atribui nada para uma variável, depois de
** cria-la,por padrão, o tipo dela é udefined "não definido".
**Quando se coloca um valor nulo à uma variável ela não aponta
**para local nenhum da memória e não existe valor.
**Nulo quer dizer ausência de valor.
**Não é bom atribuir um valor undefined, isso deve ser deixado
**ao próprio sistema.
**Se eu tento acessar a variável com valor nulo aparece um erro.
**Ao se visualizar um objeto é mostrado ele vazio.
**Para tirar o valor de um atributo usa-se o delete exemplo: delete produto.preco*/

let valor
console.log(valor)

valor = null;
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)

