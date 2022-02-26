/*Cadeia de protótipos (prototype chain)
No exemplo o objeto filho tem como prototipo 
o objeto pai, o objeto pai tem como prototipo 
o objeto avo  e o objeto avo tem como prototipo 
o objeto "object.prototype".*/

const avo = {
    atributo1: 'A - origem avô'
}

const pai = {
    //Referência de que o pai tem como prototipo o avo
    __proto__: avo, atributo2: 'B - origem pai' 
}

const filho = {
    //Referência de que o filho tem como prototipo o pai
    __proto__: pai, atributo3: 'C - origem filho' 
}

//Caso um objeto prototype não tenha um atributo ele irá até "object.prototype", caso não tenha será indefinido.
console.log(filho.atributo0)
console.log()

//Acessando os atributos herdados pelo objetos filhos
console.log(filho.atributo1)
console.log()

//Acessando os atributos herdados pelos objetos filhos
console.log(filho.atributo2)
console.log()

//Acessando os atributos herdados pelos objetos filhos
/*OBS - Caso um atributo, de mesmo nome, esteja no objeto prototype acima o sistema procura o mais próximo,
nesse exemplo primeiro no objeto chamado que é o filho.*/
console.log(filho.atributo3)
console.log()


/*********************************************************************************************************/

//Objeto prototype - pai
const carro = {
    velocAtual: 0,
    velocMax: 200,
    acelerar(aceleracao){
        if(this.velocAtual + aceleracao <= this.velocMax) {
            this.velocAtual += aceleracao
        }else {
            this.velocAtual=this.velocMax
        }
    },
    status() {
        return `${this.velocAtual}Km/h de ${this.velocMax}Km/h`
    }
}

/*No objeto filho "ferrari", existe um efeito de sombreamento "shadowing",
quando um objeto filho tem os mesmos atributos de um objeto pai, nesse exemplo
"velocMax", a prioridade no processamento é do atributo filho, deixando de lado a procura
pelo atributo "velocMax" no objeto carro. */
//Objeto prototype - filho
const ferrari = {
    modelo: 'F73',
    velocMax: 340 //shadowing
}

/*Nesse exemplo vai ser usada a propriedade "shadowing", porém não
para usar apenas o atributo filho, mas para fazer uma atribuição de valor
à função do objeto pai, usando a função do objeto pai com assinatura do 
objeto filho */
//Objeto prototype - filho
const volvo = {
    modelo: 'V42',
    status(){
        return `${this.modelo}: ${super.status()}`//shadowing - sobrescrevendo a super classe(pai) com ${this.velocMax}Km/h.
        //return `${this.modelo}: ${super.status()}`
    }
}


//Estabelecer relação de prototipo
Object.setPrototypeOf(ferrari, carro)//Relação entre ferrari e carro, ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)//Relação entre volvo e carro, volvo tem carro como seu prototipo

//Exibindo
console.log(ferrari)
console.log

console.log(volvo)//Nesse caso a função ${this.velocMax}Km/h, só vai ser chamada ser for especificada, por causa do toString, que lê o que esta dentro do objeto
console.log

//Especificando a função herdada do prototipo pai
volvo.acelerar(100)
console.log(volvo.status())
console.log


//Especificando a função herdada do prototipo pai
ferrari.acelerar(100)
console.log(ferrari.status())
console.log