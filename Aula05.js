const prompt = require("prompt-sync")();
let valor1=Number(prompt('insira o valor1'));
let valor2=Number(prompt('insira o valor2'));
let opcao=Number(prompt('Escolha 1 para multiplicar e 2 para dividir'));
let resultado;
switch(opcao){
case 1:
resultado=valor1*valor2;
console.log(`resultado:${resultado}`);
break;
case 2:
resultado=valor1/valor2;
console.log(`resultado:${resultado}`);
break;
default:
console.log('dados ou opções inválidas');
}

