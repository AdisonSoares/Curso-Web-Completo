//Criacao do array
const aprovados = ['Rafael', 'Marcelo', 'Mirian', 'Antonia']

//Percorrendo a lista
aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

//Percorrendo a lista com arrow function
aprovados.forEach(nome => console.log(nome))

//Percorrendo a lista armazenando a funcao em uma variavel e passa-la como parametro
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)