/*Exemplos de classes.
Todas as classes são um tipo de função.
A herança funciona em classes pois são uma forma diferente
de uma função*/

//Criando a super classe, estabelecerá a relação de prototipo(herança) 
class Avo{
    //Parametros da função - Função construtora
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//Criando classe, estabelecendo a relação de prototipo(herança) 
class Pai extends Avo{
    //Parametros da função - Função construtora
    constructor(sobrenome, profissao = 'Desenvolvedor'){
        //Chamada da função da super classe
        super(sobrenome)    
        this.profissao = profissao
    }
}


//Criando classe, estabelecendo a relação de prototipo(herança) 
class Filho extends Pai{
    //Parametros da função - Função construtora
    constructor(){
        //Chamada da função da super classe
        super('Silverio')    
    }
}

//Criando os objetos a partir da instancia de uma constante
const filho = new Filho
console.log(filho)
