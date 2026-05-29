// Exercicio 1

// const prompt = require("prompt-sync")();
// let nota = Number(prompt('insira a nota '));
// if (nota >= 7) {
//     console.log("Aprovado")
// } else if (nota > 5) {
//     console.log("Em recuperação")
// } else {
//     console.log("Reprovado")
// } 


// Exercicio 2

// const prompt = require("prompt-sync")();
// let idade = Number(prompt('insira a idade '));
// if (idade >= 60) {
//     console.log("Idosa")
// } else if (idade >= 18) {
//     console.log("Adulta")
// } else if (idade >= 13) {
//     console.log("Adolescente")
// } else {
//     console.log("Criança")
// }


// Exercicio 3

// const prompt = require("prompt-sync")();
// let salário = Number(prompt('insira o valor do seu salário '));
// let reajuste = 0.09
// if (salário < 1500) {
//   salário = salário + salário*2*reajuste
// } else  {
//     salário = salário + salário*reajuste
// }   console.log(`O valor do salário é de R$ ${salário.toFixed(2)}`)


// Exercicio 4

// const prompt = require("prompt-sync")();
// let n1 = Number(prompt('insira o primeiro valor: '));
// let n2 = Number(prompt('insira o segundo valor: '));
// let n3 = Number(prompt('insira o terceiro valor: '));
// if (n1 > n2 && n1 > n3) {
//     console.log(`${n1} é o maior`)
// } else if (n2 > n1 && n2 > n3) {
//     console.log(`${n2} é o maior`)
// } else if (n3 > n1 && n3 > n2) {
//     console.log(`${n3} é o maior`)
// } else {
//     console.log("há números iguais")
// }



// Exercicio 5

// const prompt = require("prompt-sync")();
// let valor = Number(prompt('informe o valor da compra: '));
// if (valor < 100){
//     valor = valor
// }
//     else if (valor < 299.99)
//     {
//        valor = valor * 0.9
//     } else if (valor < 499.99) {
//         valor = valor * 0.85
//     } else {
//         valor = valor * 0.8
//     }
//     console.log(`O valor total é: R$ ${valor.toFixed(2)}`)




// Exercicio 6

// const prompt = require("prompt-sync")();
// let valor = Number(prompt('insira o valor a ser sacado(múltiplo de 10): '));
// if (!valor || valor < 0 || valor & 10 !== 0) {
//     console.log("valor inválido. Deve ser informado um múltiplo de 10")
// } else {
//     let restante = valor

//     let notas100 = Math.floor (restante/100)
//     restante= restante % 100

//     let notas50 = Math.floor (restante/50)
//     restante= restante % 50

//     let notas20 = Math.floor (restante/20)
//     restante= restante % 20

//     let notas10 = Math.floor (restante/10)
//     restante= restante % 10

//     let totalCedulas = notas100 + notas50 + notas20 + notas10

//     console.log(`valor do saque: ${valor}`)
//     console.log(`cedulas de 100: ${notas100}`)
//     console.log(`cedulas de 50: ${notas50}`)
//     console.log(`cedulas de 20: ${notas20}`)
//     console.log(`cedulas de 10: ${notas10}`)
// }



// Exercicio 7

// const prompt = require("prompt-sync")();
// let n1 = Number(prompt('insira o primeiro valor: '));
// let n2 = Number(prompt('insira o segundo valor: '));
// if (!n2 || n2 < 0 ) {
//     console.log("valor inválido. Deve ser informado um numero positivo e diferente de zero")
// }
// let operação = Number(prompt('insira a operação (1 a 4): '));
// let resultado = 0
// switch (operação) {
//     case 1:
//         resultado = n1 + n2
//         break
//     case 2:
//         resultado = n1 - n2
//         break
//     case 3:
//         resultado = n1 * n2
//         break
//     case 4:
//         resultado = n1 / n2
//         break    
// }
// console.log(`resultado: ${resultado}`)



// Exercicio 8

// const prompt = require("prompt-sync")();
// let tamanho = Number(prompt('insira o tamanho da pizza (sendo 1 p/ P, 2 p/ M e 3 p/ G): '));
// let borda = Number(prompt('insira o tipo de borda (1 p/ tradicional e 2 p/ recheada): '));
// let valor = 0
// let valorBorda = 0
// if (borda = 2 ) {
//     valorBorda = 8
// }
// switch (tamanho) {
//     case 1:
//         valor = 25 + valorBorda
//         break
//     case 2:
//         valor = 35 + valorBorda
//         break
//     case 3:
//         valor = 45 + valorBorda
//         break
//    }
// console.log(`O valor é: ${valor} reais`)



// Exercicio 9

// const prompt = require("prompt-sync")();
// let mes = Number(prompt('insira o valor do mês (1 a 12): '));
// let nome = ""
// let dias = 0

// switch (mes) {
//     case 1:
//         nome = "janeiro"
//         dias = 31
//         break
//     case 2:
//         nome = "fevereiro"
//         let bissexto = prompt('O ano é bissexto (s/n): ')
//         dias = (bissexto == 's') ? 29 : 28
//         break
//     case 3:
//         nome = "março"
//         dias = 31
//         break
//     case 4:
//         nome = "abril"
//         dias = 30
//         break
//     case 5:
//         nome = "maio"
//         dias = 31
//         break
//     case 6:
//         nome = "junho"
//         dias = 30
//         break
//     case 7:
//         nome = "julho"
//         dias = 31
//         break
//     case 8:
//         nome = "agosto"
//         dias = 31
//         break
//     case 9:
//         nome = "setembro"
//         dias = 30
//         break
//     case 10:
//         nome = "outubro"
//         dias = 31
//         break
//     case 11:
//         nome = "novembro"
//         dias = 30
//         break
//     case 12:
//         nome = "dezembro"
//         dias = 31
//         break
// }
// console.log(`mês: ${nome}`)
// console.log(`dias: ${dias}`)




// // Exercicio 10

// const prompt = require("prompt-sync")();
// let horas = Number(prompt('insira a quantidade de horas estacionadas: '));
// if (horas < 1 || !horas) {
//     console.error("horas inválidas")}
//     else {
//         valor = 0
//         adicional = 0
//         switch(true) {
//             case horas == 1:
//                 valor = 8
//                 break
//             case horas == 2:
//                 valor = 8 + 6
//                 break
//             case horas == 3:
//                 valor = 8 + 6 + 4
//                 break
            
//             default:
//                 adicional = horas - 3
//                 valor = 4 + 4 + 4 + (adicional*2)                
//         }
//         console.log(`tempo estacionado: ${horas}`)
//         console.log(`Valor a ser pago: ${valor}`)
//     }




