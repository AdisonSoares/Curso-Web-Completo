/*JSON - Java Script object notetion, é um formato textual difente de notação literal de objeto,
não é um objeto é um formato textual, sendo conhecido também por sua simplicidade.
Criar um objeto e transformar em Json, sendo que alguns elementos ficam diferentes.
O Json é um formato de dados muito utilizado no mercado para interoperabilidade entre sistemas,
pois não carrega algo especifico de um sistema, por isso podendo ser lido em qualquer sistema.*/


//Criando o objeto que será JSON
const objeto1 = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a+b+c
    }
}

//Transformando um objeto em JSON - OBS: A função soma é excluida, pois é um formato de dados e não execução
console.log(JSON.stringify(objeto1))
console.log()


//Transformando um JSON em objeto
//console.log(JSON.parse("{a: 1, b:2, c:3}")) - Formato geral não é aceito
//console.log(JSON.parse("{'a': 1, 'b':2, 'c':3}")) - Formato geral não é aceito
//console.log(JSON.parse("{"a": 1, "b":2, "c":3}")) - Formato geral não é aceito
console.log(JSON.parse('{"a": 1, "b":2, "c":3}'))// - Formato geral é aceito
console.log(JSON.parse('{"a": 1, "b": "String", "c":true, "d": {}, "e": []}'))// - Formato geral é aceito
