// Exercicio 1

// const prompt = require("prompt-sync")();
// const livro = {
//   titulo: "O Senhor dos Anéis",
//   preco: 50.00,
//   autor: "J.R.R. Tolkien"
// };
// for (let chave in livro) {
//   console.log(`${chave}: ${livro[chave]}`);
// }
// livro.desconto = 10.00;
// const precoFinal = livro.preco - livro.desconto;
// console.log(`Preço final com desconto: R$ ${precoFinal}`);



// Exercicio 2

// const prompt = require("prompt-sync")();
// const aldebaran = { signo: "touro", defesa: 90, ataque: 90, força: 90 };
// const camus = { signo: "aquário", defesa: 80, ataque: 95, força: 80 };
// for (let chave in aldebaran) 
//     console.log(`${chave} -> aldebaran: ${aldebaran[chave]} | camus: ${camus[chave]}`);
// const Totalaldebaran = aldebaran.defesa + aldebaran.ataque + aldebaran.força;
// const Totalcamus = camus.defesa + camus.ataque + camus.força;

// if (Totalaldebaran > Totalcamus) {
//   console.log(`O cavaleiro aldebaran é mais poderoso com um total de ${Totalaldebaran} pontos!`);
// } else if (Totalcamus > Totalaldebaran) {
//   console.log(`O cavaleiro camus é mais poderoso com um total de ${camus} pontos!`);
// } else {
//   console.log("Houve um empate técnico de poder!");
// }



// Exercicio 3

// const prompt = require("prompt-sync")();
// const funcionario = { nome: "carlos", cargo: "gerente", salario: 5000, AnosDeExperiencia: 3 }
   
// for (let chave in funcionario)
//     console.log(`${chave} -> funcionario: ${funcionario[chave]}`);
// let bonus = 0;

// if (funcionario.AnosDeExperiencia <= 2) {
//   bonus = 0.05; 
// } else if (funcionario.AnosDeExperiencia >= 3 && funcionario.AnosDeExperiencia <= 5) {
//   bonus = 0.10; 
// } else {
//   bonus = 0.15;
// }
// const valorBonus = funcionario.salario * bonus;
// console.log(`bonus concedido: R$ ${valorBonus.toFixed(2)}`);



// Exercicio 4

// const prompt = require("prompt-sync")();
// const jogador = {
//   espada: 5,
//   escudo: 0,
//   magia: 2
// };
// console.log("------estoque atual------");
// for (let chave in jogador)     
//     console.log(`${chave} -> jogador: ${jogador[chave]}`);

// const escolha = prompt("Digite o nome poder que deseja usar: ");
// if (jogador[escolha] !== undefined) {
//     if (jogador[escolha] > 0) {
//         jogador[escolha]--; 
//         console.log(`Você gastou 1 ${escolha}. Novo estoque: ${jogador[escolha]}`);
//     } else {
//         console.log(`Desculpe, ${escolha} está esgotado!`);
//     }
// } else {
//     console.log("Item não encontrado.");
// }



// Exercicio 5

// const prompt = require("prompt-sync")();
// const gastos = {
//     Alimentação: {planejado: 150.00, realizado: 120.00},
//     Transporte: {planejado: 50.00, realizado: 60.00},
//     Lazer: {planejado: 100.00, realizado: 80.00}
// };
// for (let categoria in gastos) {
//     let planejado = gastos[categoria].planejado;
//     let realizado = gastos[categoria].realizado;
//     saldo = planejado - realizado;
//     if (saldo > 0) {
//         console.log(`Categoria: ${categoria} - Você economizou R$ ${saldo.toFixed(2)}!`);
//     } else if (saldo < 0) {
//         console.log(`Categoria: ${categoria} - Você gastou R$ ${Math.abs(saldo).toFixed(2)} a mais do que o planejado!`);
//     } else {
//         console.log(`Categoria: ${categoria} - Você gastou exatamente o planejado!`);
//     }   }



// Exercicio 6

// const prompt = require("prompt-sync")();
// const playlist = [
//   { titulo: "Simpatia quase amor", artista: "Jorge Ben Jor", duracao: 215 },
//   { titulo: "O Descobridor dos Sete Mares", artista: "Tim Maia", duracao: 260 }
// ];
// for (const musica of playlist) {
  
// duracaoMinutos = Math.floor(musica.duracao/60);
// duracaoSegundos = musica.duracao % 60;
// console.log(`${musica.artista} - ${musica.titulo} tem duração de ${duracaoMinutos} minutos e ${duracaoSegundos} segundos.`);
// let duracaoTotalSegundos = 0;
// playlist.forEach((musica) => {duracaoTotalSegundos += musica.duracao});
//     console.log(`Duração total da playlist é de ${duracaoTotalSegundos} segundos.`);
// }



// Exercicio 7

const prompt = require("prompt-sync")();
