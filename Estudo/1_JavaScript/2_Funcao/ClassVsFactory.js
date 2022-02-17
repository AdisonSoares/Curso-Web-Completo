class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p01 = new Pessoa('Douglas')
p01.falar()

const pessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p02 = new Pessoa('Dalila')
p02.falar()
