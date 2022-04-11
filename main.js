import './style.css';
import perguntas from './perguntas.js';
console.log(perguntas);
click.addEventListener('click', valida);
let i = -1;
let pergunta = perguntas[i];
proxima();
let k = 9;
function valida() {
  const valor = input.value;
  console.log(valor, pergunta);

  if (valor === pergunta.answer) {
    emoji.innerText = '🤩';
    texto.innerText = pergunta.award;
    if (i < k) {
      proxima();
    }
  } else {
    texto.innerText = pergunta.hint;
    emoji.innerText = '😭';
  }
  if (i === 9) {
    texto.innerText =
      'PARABÉNS, Conseguiste acertar em todas como recompensa ganhas-te um jantar num sítio a tua escolha, pago eu 😘';
  }
}

function proxima() {
  i = (i + 1) % perguntas.length;
  pergunta = perguntas[i];
  label.innerText = pergunta.question;
}
