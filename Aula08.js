

// const prompt = require("prompt-sync")();
// let compradas = Number(prompt('informe quantas maças comprou: '));
// let valor = 0
// if (compradas < 12){
//     valor = compradas * 0.30
// }
//     else
//     {
//        valor = compradas * 0.25
//     }
//     console.log(`O valor total é: R$ ${valor.toFixed(2)}`)




// const prompt = require("prompt-sync")();
// let celsius = Number(prompt('informe a temperatura em celsius: '));

// if (celsius <= -273.15) {
//     console.error('abaixo do zero absoluto')
// } 
// let farenheit = (celsius * 9/5)+32 
// console.log('a temperatura em farenheit é: '+ farenheit)



// const prompt = require("prompt-sync")();
// let numeros = 0
// for (let numeros=1000; numeros<=1999; numeros++)
//     if (numeros%11===5) {
//         console.log(numeros)}



// const prompt = require("prompt-sync")();
// let fumadospordia = Number(prompt('informe quantos cigarros fuma por dia: '));
// let anosfumando = Number(prompt('informe a quantos anos fuma: '));
// let diasfumando = anosfumando * 365
// let totaldecigarros = fumadospordia * diasfumando
// let minutosperdidos = totaldecigarros * 10
// let horasperdidas = minutosperdidos / 60
// let diasperdidos = horasperdidas / 24
// let anosperdidos = diasperdidos / 365
// console.log("anos perdidos: "+ anosperdidos.toFixed(2))
// console.log("dias perdidos: " + diasperdidos.toFixed(2))
// console.log("horas perdidas: " + horasperdidas.toFixed(2))
// console.log("minutos perdidos: " + minutosperdidos.toFixed(2))



// const prompt = require("prompt-sync")();
// let valor1 = Number(prompt('informe o primeiro valor: '));
// let valor2 = Number(prompt('informe segundo valor: '));
// if (valor1 < valor2) {
//     console.log(valor1 + "," +valor2)
// } else {
//     console.log(valor2 + "," +valor1)
// }



// const prompt = require("prompt-sync")();
// let totalEleitores = Number(prompt("Informe o número total de eleitores do município: "))
// let votosBrancos   = Number(prompt("Informe o número total de votos em branco: "))
// let votosNulos     = Number(prompt("Informe o número total de votos nulos: "))
// let votosValidos   = Number(prompt("Informe o número total de votos válidos: "))
// let percentualBrancos = (votosBrancos / totalEleitores) * 100
// let percentualNulos = (votosNulos / totalEleitores) * 100
// let percentualValidos = (votosValidos / totalEleitores) * 100
// console.log('Total de eleitores: ' + totalEleitores)
// console.log('Votos válidos: ' + votosValidos  + " -> " + percentualValidos + "%")
// console.log('Votos brancos: ' + votosBrancos  + " -> " + percentualBrancos + "%")
// console.log('Votos nulos: ' + votosNulos    + " -> " + percentualNulos + "%")
