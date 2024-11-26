//Se a XP for menor que 1.000 = Ferro
//Se a XP for entre 1001 a  2.000 = Bronze
//Se a XP for entre 2001 a 5.000 = Prata
//Se a XP for entre 5001 a 6.000 = Ouro
//Se a XP for entre 7001 a 8.000 = Platina Diamante
//Se a XP for entre 8001 a 9.000 = Ascedente
//Se a XP for entre 9001 a 10.000 = Imortal
//Se a XP for entre 1001 a 10.001 = Radiante

let nomeDoHeroi = "Perceu";
let xp = 3243;

let nivel;

if (xp < 1000) {
  nivel = "Bronze";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascedente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else if (xp >= 10001) {
  nivel = "Radiante";
} else {
  nivel = "Desconhecido";
}

console.log(`O heroi de nome ${nomeDoHeroi} está no nível de ${nivel}`)

//Saída
//Ao final deve se exibir uma mensagem
//"O Heroí de nome **{nome}** está no nível de **{nivel}**"
