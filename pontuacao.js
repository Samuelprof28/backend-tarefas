//Sistema de Pontuação de um jogo
const nomeJogador = "Elisa";
let faseAtual = 3;
let vidasRestantes = 2;

let pontosPorMissao = [85, 90, 60, 100];

//pontosPorMissao.length
let pontuacaoTotal = 0;

for (let i = 0; i < pontuacoes.length; i++) {
    pontuacaoTotal = pontuacaoTotal + pontuacoes[i]
}

//Calculando a média
let media = pontuacaoTotal / pontuacoes.length;

let passouDeFase = (media >= 75 && vidas > 0) || (fase === 1);

console.log(`Seja bem vinda ${nomeJogador}!`);
console.log(pontosPorMissao);

