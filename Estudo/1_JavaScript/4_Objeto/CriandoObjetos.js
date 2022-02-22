/*Formas diferentes de se criar objetos*/

//NOTAÇÃO LITERAL - Não confundir com JSON
const obj1 = {}
console.log(obj1)

/******************************************************************/

//OBJECT EM JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

/******************************************************************/

//FUNÇÕES CONSTRUTORAS
function Objeto(nome, preco, desc){
    //Visivel fora do objeto por usar o this - Public
    this.nome = nome
    this.getPrecoDesconto = () =>{
        return this.preco * (1 - this.desc)
    }
    //Os demais por ano serem implementandos com this ficam encapsulados - Private
}

//Instanciando o objeto por meio de uma função
const prod1 = new Objeto('Frango', 7.99, 0.15)
const prod2 = new Objeto('Arroz 5kg', 12.50, 0.35)

//Mudança das variaveis não encapsuladas no objeto
prod1.getPrecoDesconto
prod1.nome
prod1.preco

//Exibir dados
console.log(prod1.getPrecoDesconto())
console.log(prod2.getPrecoDesconto())
console.log()

console.log(prod1.nome)
console.log(prod2.nome)
console.log()

//Por não ser definido com this fora de uma função ele está encapsulado
console.log(prod1.preco)
console.log(prod2.desc)
console.log()

/******************************************************************/

//FUNÇÃO FACTORY - Padrão de projeto, fábrica
//Retorna dentro da função o objeto que se cria
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30 * (30-faltas))
        }
    }
}

//Criando objetos a partir da função
const funcionario1 = criarFuncionario('Marcos', 10000, 2)
const funcionario2 = criarFuncionario('Rosa', 10000, 1)

//Exibir dados
console.log(funcionario1.getSalario())
console.log(funcionario2.getSalario())
console.log()

//Por serem declarados no retorno da função não ficam encapsulados
console.log(funcionario1.nome)
console.log(funcionario1.salarioBase)
console.log(funcionario1.faltas)


/******************************************************************/

//OBJECT.CREATE
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha.nome)
console.log()


/******************************************************************/

//TRANSFORMAR JSON EM OBJETO
const fromJSON = JSON.parse('{"info": "Declaração de JSON"}')

//Convertido o JSON em objeto
console.log(fromJSON.info)
