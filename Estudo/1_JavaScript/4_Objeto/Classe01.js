/*Exemplos de classes.
Todas as classes são um tipo de função.*/

class Lancamento {
    //Parametros da função - Função construtora
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    //Parametros da função - Função construtora
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano

        //Incluindo um array
        this.lancamentos = []
    }
    //Adicionando funções - OBS: Os 3 pontos indicam que será um array no parametro variados
    addLancamentos(...lancamentos) {
        //Armazenando cada um dos elementos, "lancamento", do array,
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }
    //Adicionando funções
    sumario() {
        let valorConsolidado = 0
        //Para cada um dos lançamentos irá somar com consolidado
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })
        return valorConsolidado
    }
}

//Testando a classe Lançamento
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

//Testando a classe Ciclo Financeiro
const contas = new CicloFinanceiro(6, 2018)

//Adicionando valores
contas.addLancamentos(salario, contaDeLuz)

//Exibindo dados
console.log(contas.sumario())