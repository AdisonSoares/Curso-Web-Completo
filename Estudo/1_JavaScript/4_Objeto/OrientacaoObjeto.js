/*
EXEMPLO APENAS DIDÁTICO, NÃO É EXECUTÁVEL.

Antes do paradigma orientado a objetos existia o paradigma
procedural (função, procedimento).

O problema do paradigma procedural é que se uma função, com uma funcionalidade
ou variaveis globais for compartilhado e modificado os outros códigos dependentes
irão sofrer mudanças podendo não funcionar da mesma forma

Na orientação a objetos houve a mudança de foco, no procedural se tinha uma 
função que manipulava dados, na orientação a objetos se tem um dado e dentro
desse dado se tem funções.

A figura principal do paradigma orientado a objetos é o objeto,
dentro dele pode-se ter valores e funções.

A invocação dos processamentos dentro do objeto é feito a partir do 
próprio dado, funcionando como uma capsula que agrupa comportamentos
e atrobutos.

PRINCIPIOS IMPORTANTES DA ORIENTAÇÃO A OBJETOS:

1) ABSTRAÇÃO - Entender as caracteristicas de um objeto da vida real e trazer a um sistema

2) ENCAPSULAMENTO - Esconder detalhes de implementação para proteger dados e simplificar o uso.

3) HERANÇA (Prototype) - Reuso de código herdados de um objeto pai, em js é feita por meio de prototipo.

4) POLIMORFISMO - Uma classe ou valor que pode tomar multiplas formas.

Para facilitar a classificaçao de objetos pai, e sua abstração, pode-se usar o conceito "É UM".
Exemplo: O fox É UM carro; O sapato É UM calçado....

Uma tendência de arquitetura muito utilizada é a priorização do uso de composição ao invés de herança.
*/

//Procedural - Função que processa valores
processamento(valor1, valor2, valor3)

//Orientação a objeto - Dados que contém funções.
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //Comportamentos dentro do objeto
    }
}

//Invocação dos valores e processamentos do objeto
objeto.processamento()
