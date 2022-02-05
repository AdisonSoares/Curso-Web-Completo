console.log(7 / 0)//Resultado infinito
console.log("10" / 2)//Em JS não dá problema
console.log("3"+2)//Vai concatenar pois o String tem preferência
console.log("10.2" / 2)//Em JS entende o 10.2 como número
console.log("10,2" / 2)//Em JS não entende o 10,2 como número - Nan(Not a Number)
console.log("Show!" * 2)//Não é aceito em JS - Nan(Not a Number)
console.log(0.1 + 0.7)//Não vai arredondar para 0.8, é impreciso
console.log((10).toFixed(2))//Limita o float para duas casas
//console.log(10.toString())//Não é possivel converter o número diretamente