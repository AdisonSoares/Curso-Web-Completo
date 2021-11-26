/*Como o tipo var não respeita escopo de bloco acontece
**o erro de sempre apresentar um mesmo tipo de valor.
**O valor 10 mostrado reflete a última posição do i,
**não respeitando a função que pede para mostrar a posiçao
**de i nos índices 2 e 8.*/

const funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()