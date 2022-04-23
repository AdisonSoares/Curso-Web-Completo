/*Criando arrays
O array é um tipo de objeto, não existe um tipo nativo de dado array e JS,
são acessados por meio de indices.*/

console.log(typeof Array, typeof new Array, typeof [])  

//Atribuição de valores
let aprovados = new Array('Ana', 'Cintia', 'Adalberto')  
console.log(aprovados)

//Atribuição de valores de forma simples
aprovados = ['Ana', 'Cintia', 'Adalberto']

//Exibindo conforme o indice
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

//Adicionar novo elemento em um array
aprovados[3] = 'Mauricio'

//Adicionar ao fim do elemento array
aprovados.push('Bruno')

//Tamanho do elemento
console.log(aprovados.length)

//Adicionando elementos a frente da ordem
aprovados[9] = 'Joana'

//Tamanho do elemento
console.log(aprovados.length) 

//Valores do intervalo são undefined
console.log(aprovados[8] === undefined)
         
//Exibindo os dados
console.log(aprovados)      

//Alterando a ordem de exibição do array
aprovados.sort()

//Exibindo os dados
console.log(aprovados)    

//Excluindo a partir do indice - Não vai reordenar
delete aprovados[1]

//Exibindo os dados a partir do indice
console.log(aprovados[1]) 

//Exibindo os dados 
console.log(aprovados) 

//Atribuição de valores de forma simples
aprovados = ['Ana', 'Cintia', 'Adalberto']

//Remover elementos em um determinado indice
aprovados.splice(1,1)

//Exibindo os dados
console.log(aprovados)

//Adicionar/Sobrepor elementos em um determinado indice
aprovados.splice(1,1,'Elemento 1')

//Exibindo os dados
console.log(aprovados)
