/*let numero = 10
while (numero >= 1){
console.log(numero = numero -1)
}*/


/*let numero = 10
while (numero >= 1){
console.log(numero --)
}
*/

/*let contador = 0
let soma = 0
while (contador <= 10) {
    soma = soma + contador
    contador++
}
console.log(soma)*/

/*let contador = 1
do {
    console.log(contador)
        contador++
}
while(contador <= 10)*/

const prompt = require("prompt-sync")();
let soma = 0
let contador = 0
let valor = 0
do {
    valor = Number(prompt('informe um valor (zero para parar): '))
    soma += valor
}
while(valor !== 0)
    console.log(soma)