/*No callback é passada uma função para outra função, 
quando uma função for acionada ela será disparada de volta.
Para cada elemento encontrado terá uma chamada de volta.*/

const fabricantes = ['Mercedes', 'Opala', 'Monza']
function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}
fabricantes.forEach(imprimir)
console.log()

/*Outra forma passando uma função normal como paramentro*/
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
console.log()

/*Outra forma passando uma função arrow como paramentro*/
fabricantes.forEach(fabricante => console.log (fabricante))
console.log()
 