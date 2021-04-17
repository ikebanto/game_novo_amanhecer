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
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));
