function Pessoa(){
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pessoa

/*Ou*/

function Pessoa2(){
    this.idade2 = 0
    const self = this
    setInterval(function() {
        this.idade2++
        console.log(self.idade2)
    }, 1000)
}
new Pessoa2