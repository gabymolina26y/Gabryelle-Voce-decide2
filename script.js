const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "qual é a cor dos olhos",
    alternativas: [
      "azuis ",
      "verdes"
    ]
  },

  {
    enunciado: "quem é o melhor vilão jason ou fred krügger",
    alternativas: [
      "jaon",
      "fred"
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  }
];

let atual = 0;
let perguntaAtual;

function mostraAlternativas(){
  for const alternativa of perguntaAtual.alternativas){
    const boataoAlternativas = document.createElement("button");
    botaoAlternativas.textcontent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}


function mostraPergunta(){
  perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();