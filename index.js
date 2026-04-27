let frases = [
    "Luke, eu sou seu Pai! - Star Wars",
    "Vingadores, Avante! - Vingadores Ultimato",
    "O oque fazemos na vida, ecoa na eternidade - Gladiador",
    "Apenas por que não funciona, não quer dizer que ela não possa ser aprimorada - Pantera Negra",
    "A felicidade pode ser encotrada mesmo nas horas mais difíceis, se você se lembrar de acender a luz. - Harry potter",
    "As pessoas que são loucas o suficiente para pensar que podem mudar o mundoo são as que o fazem - Jobs",
    "Às vezes, são pessoa das quais ninguem imagina. - O Jogo da imitação",
];

let cliques = 0; //variavel ue conta numeros de cliques

function gerarFrases(){
    //Sorteia um número entre 0 e a qtd de frases
    let indice = Math.floor(Math.random() *frases.length);

    //pega a frase escolhida
    let fraseEscolhida = frases[indice];

    //acrescenta o contador
    cliques = cliques + 1;
    //mostra a frase nova
    document.getElementById("frase").innerText = fraseEscolhida;

    //mostra o contador atualizado
    document.getElementById("contador").innerText = "frases Geradas: " + cliques;
}
