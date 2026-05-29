let serie = {
    nome: "prison Break",
    genero: "acao",
    temporadas: 4,
    Status: "finalizada",
    Classificação: 16,
    Episódios: {
        temp1: 10,
        Temp2: 12,
        Temp3: 9,
        Temp4: 11
    },
    mostrarCaracteristicas: function() {
        return `serie: ${this.nome} | Classificação: ${this.Classificação}`
    }
}
console.log(serie.nome)
console.log(serie.mostrarCaracteristicas())