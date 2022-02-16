/*Uma dica para não se ter problemas com variáveis é
**fugir de um escopo global, pois se houver outras variáveis
**com o mesmo nome poderá haver problemas na execução.
**Só existe escopo de variável dentro de uma função,mesmo
**dentro de um bloco, com chaves, ele está no mesmo escopo.
**No exemplo abaixo o numero 2 foi impresso duas vezes.
**OBS - ESSE COMPORTAMENTO NÃO ACONTECE COM A DECLARAÇÃO LET*/

var numero = 1
{
    var numero = 2
    console.log("dentro= ",numero)
}

console.log("fora= ",numero)