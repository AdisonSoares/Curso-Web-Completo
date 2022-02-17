/*Em outras linguagens a interação com a variável ou função
**se daria apenas dentro das chaves do elemento, dentro do
**escopo, mas como exemplificado não ocorre no JS.
**A variável será acessada de forma global, fora do escopo,
**caso ela seja criada fora de uma função, caso seja criada
**dentro de um função ela será restrita.*/

//Exemplo fora de uma função
{
    { 
        {
            { 
                var sera = "Será?" 
                console.log(sera)
            }
        }
    }
}
console.log(sera)

//Exemplo com funções
function teste(){
    var local = 123
    console.log(local)
}
teste()
console.log(local)//Dará erro por estar fora da função
