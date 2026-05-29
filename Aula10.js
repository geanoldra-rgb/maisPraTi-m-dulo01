// const prompt = require("prompt-sync")();
// const timer = {
//     segundos: 0,
// iniciarcerto: function() {
//     setInterval(() => {
//         this.segundos++
//         console.log(this.segundos)
//             }, 5000)
// }
// }
// timer.iniciarcerto()



// let livro= {
//     titulo: "A Montanha Mágica",
//     autor: "Thomas Mann",
//     tema: "clássico"
//     }
//     for (const chave in livro) {
//         console.log(chave)
//         console.log(livro)
//     }


// let livro= {
//     titulo: "A Montanha Mágica",
//     autor: "Thomas Mann",
//     tema: "clássico"
//     }
//     for (const chave in livro) {
//         console.log(livro[chave])
//     }


// let frutas = [`maça`, `banana`, `uva`]

// for (const chave in frutas) {
//     console.log(chave)
//     console.log(frutas)
// }



// let frutas = [`maça`, `banana`, `uva`]

// for (const fruta of frutas) {
//       console.log(fruta)
// }



// let frutas = [`maça`, `banana`, `uva`]

// for (const [indice, fruta] of frutas.entries()) {
//       console.log(indice, fruta)
// }


// let livros = [
//       {título: 'O Hobbit', autor: 'J. R. R. Tolkien'},
//       {título: '1984', autor: 'George Orwel'},
//       {título: 'Pequeno Principe', autor: 'Saint Exuperie'},
//       {título: 'Narnia', autor: 'C. S. Lewis'},
//       {título: 'Dracula', autor: 'Bram Stoker'}
// ]
// console.table(livros)
// // for(const livro of livros)
// //       console.log(livro.título, livro.autor)

// for(const {título, autor} of livros)
//       console.log(título, autor)

// for(const i in livros){
//       console.log(i)
// console.log(livros[i].título)
// }


// const notas = [9, 8.5, 5, 6]

// notas.forEach((notas, indice, Array) => {
//       console.log(notas, indice, Array)
// })



// let carro = {cor: 'azul', cambio: 'automático', marca: 'ford'}

// for (let chave in carro)
//       console.log(`${chave}: ${carro[chave]}`)



// let cidades = ['porto alegre', 'gramado', 'salvador', 'alvorada', 'parobé']

// for(let cidade of cidades) {
//       if(cidade.startsWith('s')){
//             console.log(cidade)
//       }
//       }



// const valores = [9, 12, 5, 6]
// let soma = 0

// valores.forEach((Number) => {
// soma += Number
//       console.log(soma)
// })



// const turma = [
//       {nome: 'julio', nota: 7},
//       {nome: 'aline', nota: 8.5},
//       {nome: 'paulo', nota: 5.1},
//       {nome: 'carla', nota: 3.8},
//       {nome: 'joão', nota: 6.3}
// ]
// let aprovados = []
// let reprovados = []
// let soma = 0

// turma.forEach(({nome, nota}) => {
//       soma += nota
//       if(nota>=6) {
//             aprovados.push(nome)
// } else {
//       reprovados.push(nome)
// }
// }
// )
// let media = soma / turma.length
// console.log('aprovados: '+aprovados)
// console.log('reprovados: '+reprovados)
// console.log(`media: ${media.toFixed(2)}`)
