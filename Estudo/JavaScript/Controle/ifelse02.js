Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log("Quadro de honra")
    }else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    }else if(nota.entre(4, 6.99)){
        console.log("Recuperação")
    }else if(nota.entre(0, 3.99)){
        console.log("Reprovado")
    }else{
        console.log("Invalido")
    }

    console.log("Avaliação finalizada")
}

imprimirResultado(10)
console.log()
imprimirResultado(8.9)
console.log()
imprimirResultado(6.55)
console.log()
imprimirResultado(2.3)
console.log()
imprimirResultado(-1)
console.log()
imprimirResultado(11)
console.log()