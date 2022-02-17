function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p01 = new Pessoa('Maria')
p01.falar()

const criarPessoa = nome =>{
    return{
        falar:()=> console.log(`Meu nome é ${this.nome}`)
    }
}

const p02 = new Pessoa('José')
p02.falar()
