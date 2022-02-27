/*A função charAt(4) mostra a letra na posição 4 do indice da palavra,
**ou seja, a letra r.
**Apesar de ser colocado um código com "erro", inclusive do ponto de vista
**de outras linguagens, dificilmente vai parar a execução, no exemplo 
**do charAt(5), não existe caracter na posição 5 mas o sistema
**apenas apresenta um resultado vazio.
**A função charCodeAt (3) busca o caracter referenciado na variável escola
** que está na posição 3 e retorna o correspondente a ele de acordo com a 
**tabela ask ou tabela unicode, no exemplo o caracter 3 corresponde ao
**valor 51.
**A função indexOf("3"), busca na variável referenciado se existe o 
**caracter "3" e apresenta a posiçao desse caracter de acordo com a
**quantidade de índices da variável, no exemplo ele está na posição 3.
**A função substring mostra os strings da variável no primeiro exemplo
**abaixo (escola.substring(1)) do indice 1 para frente, sem incluir o caracter do indice 0,
**e no outro exemplo (escola.substring(0,3)) é mostrado do caracter 0 até o 
**2 sem incluir do caracter 3 para frente.
**A função concat é usada para concatenar Strings, porém pode-se usar 
**o + para concatenar, da mesma forma que em java.
**A função replace substitui um caracter por outro, no exemplo 
**escola.replace(3,"e"), é substituido o caracter 3 por "e", resultando
**em Coder sem o 3.
**Os comandos (escola.replace(/\d/,"e") e (escola.replace(/\w/g,"e")
**são expressões regulares do regex no primeiro (/\d/,"e") diz para 
**substituir todos os dígitos/números pelo caracter "e"no segundo (/\w/g,"e")
**diz para substituir todos os caracteres e dígitos por "e".
**A função split cria um array com as Strings especificadas, sendo necessário
**especificar o separador dos conteúdos e colocar entre parenteses, no exemplo
** cada palavra está separada por vírgula, por isso se colocou virgula dentro
**do parentese ("Ana, Maria, Pedro".split(","), gerando um array de 3 posiçoes
**[ 'Ana', ' Maria', ' Pedro' ].*/

const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("3"))
console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log("Escola ".concat(escola).concat("!"))
console.log("Escola "+escola+"!")
console.log(escola.replace(3,"e"))
console.log(escola.replace(/\d/,"e"))
console.log(escola.replace(/\w/g,"e"))
console.log("Ana, Maria, Pedro".split(","))

 
