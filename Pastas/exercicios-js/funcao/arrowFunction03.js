let comparaComThis = function(param){
    console.log(this===param)
}

comparaComThis(global)

/*Com bind não é apontado para global e sim obj*/
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
comparaComThis(global)

let comparaComThisArrow = param => console.log(this===param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow=comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


