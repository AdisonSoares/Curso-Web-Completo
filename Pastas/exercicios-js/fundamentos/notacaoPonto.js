console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "bola1"
//obje1['nome'] = "bola2" - As duas linhas são equivalentes
console.log(obj1)
console.log()

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log("Exec...")
    }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()