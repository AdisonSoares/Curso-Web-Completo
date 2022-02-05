function boaNoticia(nota){
    if(nota>=7){
        console.log("Aprovado com " + nota)
    }else{
        console.log("Reprovado com "+nota)
    }
}
boaNoticia(8.1)
boaNoticia(6.2)
console.log()

function seForVardade(valor){
    if(valor){
        console.log("É verdade... "+valor)
    }else
        console.log("É falso... "+valor)
}

//Valores falsos
seForVardade()
seForVardade(null)
seForVardade(undefined)
seForVardade(NaN)
seForVardade('')
seForVardade(0) 

//Valores verdadeiros
seForVardade(-1) 
seForVardade(' ')
seForVardade('?')
seForVardade([])
seForVardade([1,2])
seForVardade({})
