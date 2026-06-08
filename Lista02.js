// Exercicio 1

// const prompt = require("prompt-sync")();
// let continuar
// do {
// let numero = Number(prompt('insira um número para ver sua tabuada: '));
// console.log(`tabuada do número ${numero}`)
// for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i
//     console.log(`${numero} x ${i} = ${resultado}`)
// }
// continuar = prompt("Deseja ver outra tabuada? (Digite 'sim' para continuar): ").toLowerCase();
// } while (continuar === "sim")
// console.log('programa encerrado')



// Exercicio 2

// const prompt = require("prompt-sync")();
// let numero = Number(prompt('insira um número inteiro positivo: '));
// if (numero === 0) {
//     console.log('o número possui 1 dígito')
// } else {
//     let contador = 0;
//     while (numero > 0) {
//         contador++
//         numero = Math.floor(numero/10)
//     }
// console.log(`O número possui ${contador} dígitos`)
// }



// Exercicio 3

// const prompt = require("prompt-sync")();
// let numero = Number(prompt('Quantos numeros da sequência de Fibonacci deseja ver: '));
// let termoAnterior = 0
// let termoAtual = 1
// for (let i = 1; i <= numero; i++) {    
//     let proximoTermo = termoAtual + termoAnterior
//     termoAnterior = termoAtual
//     termoAtual = proximoTermo
//         console.log(`Sequência de Fibonacci: ${proximoTermo}`) }



// Exercicio 4

// const prompt = require("prompt-sync")();
// let senha = 0
// let senhaCorreta = 1234
// let contador = 0
// do {
//     senha = Number(prompt('insira uma senhade 4 dígitos: '));
//     contador ++ 
//     if (senha !== senhaCorreta && contador < 3) {
//         console.log('Acesso negado, tente novamente')
//     } }   
//  while (senha !== senhaCorreta && contador < 3)
//     if (senha === senhaCorreta) {
//     console.log('Acesso permitido')
// } else {
//     console.log('Número de tentativas excedido. Acesso bloqueado.')
// }



// Exercicio 5

// const prompt = require("prompt-sync")();
// let numero = Number(prompt('insira um número inteiro positivo: '));
// let QtdPrimos = 0
// for (let i = 2; i <= numero; i++) {
//     let primo = true
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             primo = false
//             break
//         }   }
//         if (primo) {
//             console.log(`Número primo: ${i}`)
//             QtdPrimos++ }}
//             console.log(`Quantidade de números primos é ${QtdPrimos}`)
        
        
    
// Eexercicio 6

// const prompt = require("prompt-sync")();
// const alunos = [
//     { nome: 'João', nota: 7.5 },
//     { nome: 'Maria', nota: 8.2 },
//     { nome: 'Pedro', nota: 6.9 },
//     { nome: 'Ana', nota: 9.1 },
//     { nome: 'Lucas', nota: 9.5 }
// ];
// let soma = 0
// let maiorNota = alunos[0].nota
// let menorNota = alunos[0].nota
// for (let i = 0; i < alunos.length; i++) {
//     let alunoAtual = alunos[i]
//     soma += alunoAtual.nota
//     if (alunoAtual.nota > maiorNota) {
//         maiorNota = alunoAtual.nota
//     }
//     if (alunoAtual.nota < menorNota) {
//         menorNota = alunoAtual.nota
//     }
// }
// let media = soma / alunos.length
// console.log(`A média das notas é: ${media.toFixed(2)}`)
// console.log(`A maior nota é: ${maiorNota}`)
// console.log(`A menor nota é: ${menorNota}`)



// Exercicio 7

// const prompt = require("prompt-sync")();
// let nomesProdutos = [];
// let precosProdutos = [];
// let subtotal = 0;
// console.log("Digite 'sair' no nome do produto para encerrar o cadastro");
// while (true) {
//     let nome = prompt("Digite o nome do produto: ");
//     if (nome.toLowerCase() === "sair") {
//         break;
//     }
//     let preco = Number(prompt(`Digite o preço de [${nome}]: R$ `));
//     nomesProdutos.push(nome);
//     precosProdutos.push(preco);
// }
// if (nomesProdutos.length === 0) {
//     console.log("\nO carrinho está vazio.");
// } else {
//        for (let i = 0; i < nomesProdutos.length; i++) {
//         console.log(`${i + 1}. ${nomesProdutos[i]} - R$ ${precosProdutos[i].toFixed(2)}`);
//         subtotal += precosProdutos[i];
//     }
//     console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);

//     let totalAPagar = subtotal;

//     if (nomesProdutos.length > 3) {
//         let desconto = subtotal * 0.10;
//         totalAPagar = subtotal - desconto;
//         console.log(`Desconto aplicado (10% por mais de 3 itens): - R$ ${desconto.toFixed(2)}`);
//     } else {
//         console.log("Sem direito a desconto (3 itens ou menos).");
//     }
//     console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
// }



// Exercicio 8

// const prompt = require("prompt-sync")();
// let palavra = prompt('insira uma palavra: ');
// let palavraOriginal = palavra.toString(); 
// let caracteres = palavraOriginal.split('');
// let palavraInvertida = "";

// for (let i = caracteres.length - 1; i >= 0; i--) {
//     palavraInvertida += caracteres[i];
// }

// console.log("Original:", palavraOriginal);
// console.log("Invertida:", palavraInvertida);
// if (palavraOriginal === palavraInvertida) {
//     console.log("A palavra é um palíndromo.");
// } else {
//     console.log("A palavra não é um palíndromo.");
// }



// Exercicio 9

// const prompt = require("prompt-sync")();
// let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let historico = [];
// let palpite;

// do {
//     palpite = Number(prompt("Digite seu palpite (entre 1 e 100): "));
//     historico.push(palpite);

//     if (palpite < numeroSecreto) {
//         console.log("Muito baixo! Tente novamente.");
//     } else if (palpite > numeroSecreto) {
//         console.log("Muito alto! Tente novamente.");
//     } else {
//         console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${historico.length} tentativas.`);
//         console.log("Histórico de palpites:", historico.join(", "));
//     }

// } while (palpite !== numeroSecreto);



// Exercicio 10

// const prompt = require("prompt-sync")();
// let notasMatriz = [];
// let somaMediasTurma = 0;
// let maiorMedia = -1;
// let melhorAluno = "";

// for (let i = 0; i < 3; i++) {
//     notasMatriz[i] = []; 
//     let somaNotasAluno = 0;
    
//     console.log(`\n--- Notas do Aluno ${i + 1} ---`);
    
//     for (let j = 0; j < 4; j++) {
//         let nota = Number(prompt(`Digite a nota ${j + 1}: `));
//         notasMatriz[i].push(nota);
//         somaNotasAluno += nota;
//     }
//     let mediaAluno = somaNotasAluno / 4;
//     somaMediasTurma += mediaAluno;  
//     console.log(`Média do Aluno ${i + 1}: ${mediaAluno.toFixed(2)}`);    
//     console.log(`Média da turma até agora: ${(somaMediasTurma / (i + 1)).toFixed(2)}`);

//     if (mediaAluno > maiorMedia) {
//         maiorMedia = mediaAluno;
//         melhorAluno = `Aluno ${i + 1}`;
       
//     }       }
//     console.log(`O melhor aluno é ${melhorAluno} com média ${maiorMedia.toFixed(2)}`);