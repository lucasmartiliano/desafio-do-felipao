let nome = "João";
let XP = 11000;
let nivel = "Easy";

if (XP <= 1000) {
    let nivel = "Ferro"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}else if (XP >= 1001 && XP <= 2000) {
    let nivel = "Bronze"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}else if (XP >= 2001 && XP <= 5000) {
    let nivel = "Prata"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}else if (XP >= 5001 && XP <= 7000) {
    let nivel = "Ouro"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}else if (XP >= 7001 && XP <= 8000) {
    let nivel = "Platina"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}else if (XP >= 8001 && XP <= 9000) {
    let nivel = "Ascendente"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}else if (XP >= 9001 && XP <= 10000) {
    let nivel = "Imortal"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}else {
    let nivel = "Radiante"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}

