const prompt = require("prompt-sync")();
const aldebaran = { signo: "touro", defesa: 90, ataque: 90, força: 90 };
const camus = { signo: "aquário", defesa: 80, ataque: 95, força: 80 };
for (let chave in aldebaran) 
    console.log(`${chave} -> aldebaran: ${aldebaran[chave]} | camus: ${camus[chave]}`);
const Totalaldebaran = aldebaran.defesa + aldebaran.ataque + aldebaran.força;
const Totalcamus = camus.defesa + camus.ataque + camus.força;

if (Totalaldebaran > Totalcamus) {
  console.log(`O cavaleiro aldebaran é mais poderoso com um total de ${Totalaldebaran} pontos!`);
} else if (Totalcamus > Totalaldebaran) {
  console.log(`O cavaleiro camus é mais poderoso com um total de ${camus} pontos!`);
} else {
  console.log("Houve um empate técnico de poder!");
}