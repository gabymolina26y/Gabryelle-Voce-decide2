const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "assim que ssaiu da escola você se depara com uma nova tecnologia, um chat que cosnegue responder todas as duvidas de uma pessoa pode ter, ele também gera imagens e audios hiper-realistas.Qual seu primeiro pensamento";
    alternativas: [
      "isso é assustador !";
      "isso é maravilhoso!";
    ]
  }

  {
    enunciado: "Com a descoberta dessa tecnologia, chamada inteligencia artificial(IA), uma professora de tecnologia decicidiu fazer uma sequencia de aulas sobre essa ferramenta. No fim de uma aula ela pede que você escreva um trabalho sobre o uso da IA na sala de aula. Qual atitude você?";
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linmguagem que facilite o entendimento"
      "b"
    ]
  }

  {
    enunciado: "Pergunta 3"
    alternativas: [
      "Resposta 1 "
      "Resposta 2"
    ]
  }

  {
    enunciado: "Pergunta 4"
    alternativas: [
      "Resposta 1 "
      "Resposta 2"
    ]
  }

  {
    enunciado: "Pergunta 5"
    alternativas: [
      "Resposta 1 "
      "Resposta 2"
    ]
  }
]

let atual = 0;
let perguntaAtual;

function mostraAlternativas(){
  for const alternativa of perguntaAtual.alternativas){
    const boataoAlternativas = document.createElement("button");
    botaoAlternativas.textcontent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}


function mostraPergunta()
{
  perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();
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
