const cardBoard = document.querySelector("#cardboard");
const imgs = [
  'abuso_sexual_contato_fisico.svg',
  'abuso_sexual_extra_familiar.svg',
  'abuso_sexual_inst.svg',
  'abuso_sexual_intra_familiar.svg',
  'contato_fisico.svg',
  'disk100.svg',
  'pornografia_infantil.svg',
  'trabalho_sexual_agenciado.svg',
  'trabalho_sexual_autonomo.svg',
  'trafico_sexual.svg',
  'trocas_sexuais.svg',
  'turismo_sexual.svg'
];

const msg_asscf = ['Título','Mensagem para abuso sexual sem contato físico'];
const msg_assef = ['Título','Mensagem para abuso extra familiar'];
const msg_asi = ['Título','Mensagem para abuso em instituições'];
const msg_asif = ['Título','Mensagem para abuso intra familiar'];
const msg_asccf = ['Título','Mensagem para abuso sexual com contato físico'];
const msg_d100 = ['Título','Mensagem para disk 100'];
const msg_pi = ['Título','Mensagem para pornografia infantil'];
const msg_tsag = ['Título','Mensagem para trabalho sexual agenciado'];
const msg_tsau = ['Título','Mensagem para trabalho sexual autônomo'];
const msg_trafsex = ['Título','Mensagem para tráfico sexual'];
const msg_trocsex = ['Título','Mensagem para trocas sexual'];
const msg_turisex = ['Título','Mensagem para turismo sexual'];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/fd-card.svg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim da Renderização HTML */

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
	exibeMensagem(secondCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

function selecionaMensagem(card){

	switch (card.dataset.card) {
		case "abuso_sexual_contato_fisico.svg":
			return msg_asscf;
			break;
		case "abuso_sexual_extra_familiar.svg":
			return msg_assef;
			break;
		case "abuso_sexual_inst.svg":
			return msg_asi;
			break;
		case "abuso_sexual_intra_familiar.svg":
			return msg_asif;
			break;
	    case "contato_fisico.svg":
			return msg_asccf;
			break;
		case "disk100.svg":
			return msg_d100;
			break;
		case "pornografia_infantil.svg":
			return msg_pi;
			break;
	    case "trabalho_sexual_agenciado.svg":
			return msg_tsag;
			break;
		case "trabalho_sexual_autonomo.svg":
			return msg_tsau;
			break;
		case "trafico_sexual.svg":
			return msg_trafsex;
			break;
		case "trocas_sexuais.svg":
			return msg_trocsex;
			break;
		case "turismo_sexual.svg":
			return msg_turisex;
	}
}

(function shuffle (){
	cards.forEach ( card => {
		let rand = Math.floor(Math.random()*12);
		card.style.order = rand;
	})
})();

function exibeMensagem (card){

	var img = null;
	var titulo = selecionaMensagem(card)[0];
	var mensagem = selecionaMensagem(card)[1];

	const modal = document.getElementById("modal");
	const divMsg = document.getElementById("divMsg");
	const h2 = document.getElementById("titulo");
	const p = document.getElementById("mensagem");

	modal.style.display = "block";
	divMsg.style.display = "block";
	h2.innerHTML = "";
	p.innerHTML = "";

	h2.innerHTML = titulo;
	p.innerHTML = mensagem;
}

function fechaMensagem (){
	const modal = document.getElementById("modal").style.display = 'none';
}

cards.forEach(card => card.addEventListener("click", flipCard));
