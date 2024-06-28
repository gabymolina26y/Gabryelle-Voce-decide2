const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue todas as dúvidas que uma pessoa pod ter, ele também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
    alternativas: [
      "Isso é assustador",
      "Isso é maravilhoso"
    ]
  },

  {
    enunciado: "Com a descoberta desta tecnologia, chamada inteligência artificial (IA), uma professora de tecnologia de uma escola decidiu fazer uma sequência de aulas sobre essa ferramenta. No fim de uma aula, ela pede que você escreva um trabalho sobre o uso de uma IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o entendimento.",
      "Escreve um trabalho com base em conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
    ]
  },

  {
    enunciado: "pergunta 3",
    alternativas: [
      "resposta 5",
      "resposta 6"
    ]
  },

  {
    enunciado: "pergunta 4",
    alternativas: [
      "resposta 7",
      "resposta 8"
    ]
  },

  {
    enunciado: "pergunta 5",
    alternativas: [
      "resposta 9",
      "resposta 10"
    ]
  }

];

let atual = 0;
let perguntaAtual;

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();