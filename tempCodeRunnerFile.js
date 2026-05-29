const prompt = require("prompt-sync")();
let valor = Number(prompt('informe o valor da compra: '));
let valor = 0
if (valor < 100){
    valor = valor
}
    else if (valor < 299.99)
    {
       valor = valor * 0.9
    } else if (valor < 499.99) {
        valor = valor * 0.85
    } else {
        valor = valor * 0.8
    }

    console.log(`O valor total é: R$ ${valor.toFixed(2)}`)