/*Como o tipo Let respeita as limitações de um bloco
**de código o erro com Var não acontece e o sistema
**mostra a diferenciação de cada valor de acordo com
**o índice 2 e 8, usando o Let.*/

const funcs = []
for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()