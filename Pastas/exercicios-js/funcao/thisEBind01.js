const pessoa = {
    saudacao: 'Olá!',
    falar(){
       console.log(this.saudacao) 
    }
}
pessoa.falar()

/*Conflito entre os paradigmas funcionario e orientado a objeto*/
const falar = pessoa.falar
falar()

/*A função bind não apresentando problemas com o ponteiro da função definindo-o para o objeto*/
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()
