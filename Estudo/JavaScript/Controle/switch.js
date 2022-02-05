const exibirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:{
            console.log("Quadro de honra")
            break
        }     
        case 8: case 7:
            console.log("Aprovado")    
            break    
        case 6: case 5: case 4:  
            console.log("Recuperação")    
            break  
        case 3: case 2: case 1: case 0: 
            console.log("Reprovado")    
            break  
        default:
            console.log("Invalido")    
            break
    }
}

exibirResultado(10)
console.log()
exibirResultado(8.9)
console.log()
exibirResultado(6.55)
console.log()
exibirResultado(2.3)
console.log()
exibirResultado(-1)
console.log()
exibirResultado(11)
console.log()