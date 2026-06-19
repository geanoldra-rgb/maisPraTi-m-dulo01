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

// const prompt = require("prompt-sync")();
// const alunos = [
//     { nome: "Maria", nota: 50 },
//     { nome: "João", nota: 90 },
//     { nome: "Ana", nota: 40 },
//     { nome: "Pedro", nota: 85 },
//     { nome: "Lucas", nota: 65 }
// ];
// for (const aluno of alunos) {
//     let situação = "";
//     if (aluno.nota >= 60) {
//         situação = "Aprovado";
//     } else if (aluno.nota >= 50) {
//         situação = "Recuperação";
//     } else if (aluno.nota <= 50) {
//         situação = "Reprovado";
//     } 
//     console.log(`Aluno: ${aluno.nome} - Nota: ${aluno.nota} - Situação: ${situação}`); }

//     let somaAprovados = 0;
//     let quantidadeAprovados = 0;
//     let somaReprovados = 0;
//     let quantidadeReprovados = 0;
//     alunos.forEach((aluno) => {
//         if (aluno.nota >= 60) {
//             somaAprovados += aluno.nota;
//             quantidadeAprovados++;
//         } else if (aluno.nota <= 50) {
//             somaReprovados += aluno.nota;
//             quantidadeReprovados++;
//         }
//     });
//     const mediaAprovados = quantidadeAprovados > 0 ? somaAprovados / quantidadeAprovados : 0;
//     const mediaReprovados = quantidadeReprovados > 0 ? somaReprovados / quantidadeReprovados : 0;
//     console.log(`Média dos alunos aprovados: ${mediaAprovados.toFixed(2)}`);
//     console.log(`Média dos alunos reprovados: ${mediaReprovados.toFixed(2)}`);



// Exercicio 8

// const prompt = require("prompt-sync")();
// const estoque = [
//     { nome: "Camiseta", preco: 50.00, quantidade: 10 },
//     { nome: "Calça", preco: 100.00, quantidade: 5 },
//     { nome: "Tênis", preco: 150.00, quantidade: 3 } 
// ]
// let valorTotalEstoque= 0
// estoque.forEach((produto) => {
//     const valorItem = produto.preco * produto.quantidade;
//     valorTotalEstoque += produto.preco * produto.quantidade;
//     console.log(`Produto: ${produto.nome} - Preço: R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade} - Valor total em estoque: R$ ${valorItem.toFixed(2)}`);
//     console.log(`Valor total em estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
// });



// Exercicio 9

// const prompt = require("prompt-sync")();
// const contatos = [
//     { nome: "Ana Silva", telefone: "(51) 99999-1111", email: "ana.silva@email.com" },
//     { nome: "Bruno Costa", telefone: "(51) 98888-2222", email: "bruno.costa@email.com" },
//     { nome: "Carlos Souza", telefone: "(51) 97777-3333", email: "carlos.souza@email.com" }
// ];
// contatos.forEach(contato => {
//     console.log(`nome: ${contato.nome} | tel: ${contato.telefone} | E-mail: ${contato.email}`);
// });
// const nomeBuscado = prompt("Digite o nome completo que deseja buscar: ");
// let contatoAchado = null;

// for (const contato of contatos) {
//     if (contato.nome.toLowerCase() === nomeBuscado.toLowerCase()) {
//         contatoAchado = contato;
//         break;
//     }
// }
//     if (contatoAchado) {
//         console.log(`\nContato Encontrado:`);
//         console.log(`nome: ${contatoAchado.nome} | Tel: ${contatoAchado.telefone} | Email: ${contatoAchado.email}`)
//     }



// Exercicio 10

// const prompt = require("prompt-sync")();
// const historico = [];
// function visitar(pagina) {
// historico.push(pagina);
// console.log(`Visitando a página ${pagina}`);
// }
// function voltar() {
//     if (historico.length === 0) {
//         console.log("Não há páginas no histórico para voltar.");
//         return;
// }
//     const paginaSaindo = historico.pop();
//     console.log(`<- Voltando de: ${paginaSaindo}`);
// }
// function paginaAtual() {
//     if (historico.length === 0) {
//         return "Nenhuma página aberta (Histórico vazio).";
//     }
//     return historico[historico.length - 1];
// }
// console.log("=== SIMULANDO NAVEGADOR ===\n");

// visitar("google.com");
// console.log(`Página Atual: ${paginaAtual()}\n`);

// visitar("github.com");
// console.log(`Página Atual: ${paginaAtual()}\n`);

// visitar("stackoverflow.com");
// console.log(`Página Atual: ${paginaAtual()}\n`);

// visitar("prati.com.br");
// console.log(`Página Atual: ${paginaAtual()}\n`);


// console.log("=== CLICANDO NO BOTÃO VOLTAR ===\n");

// voltar();
// console.log(`Página Atual: ${paginaAtual()}\n`);

// voltar();
// console.log(`Página Atual: ${paginaAtual()}\n`);

// console.log("=================================");
// console.log("Estado final do histórico (Pilha):", historico);



// Exercicio 11

// const prompt = require("prompt-sync")();

// const filaClinica = [];
// function chegarPaciente(nome) {
//     filaClinica.push(nome);
//     console.log(`[Chegada] Paciente ${nome} entrou na fila.`);
// }
// function chamarProximo() {
//     if (filaClinica.length === 0) {
//         console.log("[Atendimento] Não há pacientes na fila de espera.");
//         return null;
//     }
//     const proximoPaciente = filaClinica.shift();
//     console.log(`[Chamada] Próximo paciente a ser atendido: Dr(a). vai atender ${proximoPaciente}.`);
//     return proximoPaciente;
// }
// function exibirFila() {
//     if (filaClinica.length === 0) {
//         console.log("Estado da Fila: [ Vazia ]");
//     } else {
      
//         console.log(`Estado da Fila: [ ${filaClinica.join(" <- ")} ] (Início para o Fim)`);
//     }
//     console.log("--------------------------------------------------\n");
// }

// console.log("=== INICIANDO SISTEMA DA CLÍNICA ===\n");
// exibirFila();

// chegarPaciente("Mariana");
// exibirFila();

// chegarPaciente("Rodrigo");
// exibirFila();

// chegarPaciente("Beatriz");
// exibirFila();

// chegarPaciente("Gabriel");
// exibirFila();

// chegarPaciente("Vanessa");
// exibirFila();

// console.log("=== INICIANDO OS ATENDIMENTOS ===\n");

// chamarProximo();
// exibirFila();

// chamarProximo();
// exibirFila();

// chamarProximo();
// exibirFila();

// console.log("=== ESTADO FINAL DO DIA ===");
// console.log("Pacientes que ainda aguardam atendimento:", filaClinica);



// Exercicio 12 

// const prompt = require("prompt-sync")();
// function criarNo(tarefa) {
//     return {
//         valor: tarefa,
//         proximo: null
//     };
// }
// let cabeca = null; 

// function adicionar(tarefa) {
//     const novoNo = criarNo(tarefa);

//     if (cabeca === null) {
//         cabeca = novoNo;
//     } else {
//         let atual = cabeca;
//         while (atual.proximo !== null) {
//             atual = atual.proximo;
//         }
//         atual.proximo = novoNo;
//     }
//     console.log(`[Adicionar] Tarefa "${tarefa}" adicionada.`);
// }
// function remover(tarefa) {
//     if (cabeca === null) {
//         console.log("[Remover] A lista já está vazia.");
//         return;
//     }
//     if (cabeca.valor === tarefa) {
//         cabeca = cabeca.proximo; 
//         console.log(`[Remover] Tarefa "${tarefa}" removida com sucesso.`);
//         return;
//     }
//     let atual = cabeca;
//     while (atual.proximo !== null && atual.proximo.valor !== tarefa) {
//         atual = atual.proximo;
//     }
//     if (atual.proximo !== null) {
//         atual.proximo = atual.proximo.proximo;
//         console.log(`[Remover] Tarefa "${tarefa}" removida com sucesso.`);
//     } else {
//         console.log(`[Remover] Tarefa "${tarefa}" não foi encontrada.`);
//     }
// }
// function exibir() {
//     if (cabeca === null) {
//         console.log("Lista de Tarefas: [ Vazia ]");
//         return;
//     }
//     let atual = cabeca;
//     let resultado = "";
    
//     while (atual !== null) {
//         resultado += `[${atual.valor}] -> `;
//         atual = atual.proximo;
//     }
//     resultado += "null";
//     console.log("Lista de Tarefas Atual:", resultado);
// }
// console.log("=== INICIANDO GERENCIADOR DE TAREFAS ===\n");

// adicionar("Estudar JavaScript");
// adicionar("Fazer exercícios da +PraTi");
// adicionar("Comprar café");
// adicionar("Revisar Código");

// console.log("\n--- EXIBINDO ANTES DA REMOÇÃO ---");
// exibir();

// console.log("\n---------------------------------");
// remover("Comprar café");
// console.log("---------------------------------");

// console.log("\n--- EXIBINDO DEPOIS DA REMOÇÃO ---");
// exibir();