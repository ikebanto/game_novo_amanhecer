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

const msg_asscf = ['ABUSO SEXUAL SEM CONTATO FÍSICO','São ações sexuais que não envolvem contato físico entre adultos, crianças e adolescentes. Podem ser: Assédio Sexual: Insinuações e propostas de relações sexuais;  Abuso Sexual Verbal: Conversas com conteúdo sexuais para despertar e/ou estimular os desejos de crianças e adolescentes (exemplo: telefonemas obscenos); Exibicionismo: Mostrar os órgãos genitais ou se masturbar no campo de visão de crianças e adolescentes; Voyeurismo: Observar com fixação os órgãos sexuais obtendo satisfação; Pornografia: Expor a criança a material pornográfico.'];
const msg_assef = ['ABUSO SEXUAL EXTRA FAMILIAR','A principal característica é a ocorrência da ação fora do núcleo familiar. Aqui o(a) autor(a) da violência, na maioria das vezes, é alguém que a criança ou adolescente conhece e em quem confiam, podendo ser: vizinhos e amigos da família. Eventualmente, o(a) autor(a) da violência pode ser uma pessoa totalmente desconhecida, como nos casos de estupros em locais públicos.'];
const msg_asi = ['ABUSO SEXUAL EM INSTITUIÇÕES DE ATENÇÃO À CRIANÇA E AO ADOLESCENTE','Pode acontecer em instituições da saúde, educação, assistência social, governamentais ou não, que deveriam garantir a proteção e os direitos de crianças e adolescentes. Aqui as violências podem ocorrer tanto por profissionais da instituição quanto entre as próprias crianças e adolescentes. As relações de poder e dominação existentes na sociedade são refletidas nesta violência, onde os recém-chegados na instituição são forçados a se submeter às regras sexuais impostas pelos responsáveis ou grupos mais velhos e antigos que dominam o território e o poder local.'];
const msg_asif = ['ABUSO SEXUAL INTRAFAMILIAR','Alguns conhecem também como abuso sexual incestuoso. É a relação sexual que envolve um adulto, criança ou adolescente com laço familiar ou numa relação de responsabilidade. Geralmente o(a) autor(a) da violência é uma pessoa que a vítima conhece, confia e em alguns casos ama. Normalmente existe uma relação de poder tanto do ponto de vista hierárquico,  quanto econômico e afetivo. Mesmo que o(a) autor(a) da violência não use necessariamente da força física, mas sim dessa relação de poder esta ação é considerada abuso sexual.'];
const msg_asccf = ['ABUSO SEXUAL COM CONTATO FÍSICO','Envolvem atos físicos que incluem carícias nos órgãos genitais, tentativas de relações sexuais, masturbação, sexo oral, penetração vaginal e anal. Eles podem ser legalmente tipificados em: atentado violento ao pudor, corrupção de menores, sedução e estupro. Existe, contudo, uma compreensão mais ampla de abuso sexual com contato físico que inclui contatos "forçados" como beijos e toques em outras zonas corporais erógenas.'];
const msg_d100 = ['DISK 100','O Disque Direitos Humanos, ou Disque 100, é um serviço de proteção de crianças e adolescentes com foco em violência sexual, vinculado ao Programa Nacional de Enfrentamento da Violência Sexual contra Crianças e Adolescentes, da SPDCA/SDH.'];
const msg_pi = ['PORNOGRAFIA INFANTIL','É a exposição de pessoas com suas partes sexuais visíveis ou práticas sexuais que envolvem adultos, crianças e adolescentes. Elas podem ser em forma de revistas, livros, filmes e principalmente na internet. A pornografia envolvendo crianças e adolescentes é considerada crime, tanto para aquelas pessoas que fotografam ou expõem crianças nuas ou em posições sedutoras com objetivos sexuais, quanto para aqueles que mostram para crianças fotos, vídeos ou cenas pornográficas. A pornografia é um produto com fins comerciais destinado a realizar um apelo sobre o estímulo sexual dos indivíduos.'];
const msg_tsag = ['TRABALHO SEXUAL INFANTOJUVENIL AGENCIADO','É a exploração sexual de crianças e adolescentes intermediada por uma ou mais pessoas, conhecidas como rufiões, cafetões e cafetinas, ou por serviços que são normalmente conhecidos como bordéis, serviços de acompanhamento, clubes noturnos. As crianças e adolescentes nesta situação pagam um percentual do que ganham para essas pessoas ou ofertam esses serviços em troca de residência, pensão alimentícia, roupas, transporte, maquiagem e proteção. O que normalmente acontece aqui é que crianças e adolescentes se transformam em reféns dos seus agenciadores, caracterizando uma relação de exploração ou de semiescravidão.'];
const msg_tsau = ['TRABALHO SEXUAL INFANTOJUVENIL AUTÔNOMO','É a prática de atos sexuais realizada por crianças e adolescentes mediante pagamento. Muitas se engajam em trabalho sexual e fazem dele a sua principal estratégia de sobrevivência. Muitas(os) não são e nem aceitam ser agenciados por intermediários. Entre elas(es), estão garotas e garotos que são prostituídas(os) na rua ou em programas de acompanhamento negociados por telefone.'];
const msg_trafsex = ['TRÁFICO PARA FINS DE EXPLORAÇÂO SEXUAL DE CRIANÇA E ADOLESCENTE','A prática envolve atividades de cooptação e/ou aliciamento, rapto, intercâmbio, transferência e hospedagem da pessoa recrutada para essa finalidade. O mais recorrente, entretanto, é que o tráfico para fins de exploração sexual de crianças e adolescentes ocorra de forma disfarçada por agências de modelos, turismo, trabalho internacional, namoro-matrimônio e, mais raramente, por agências de adoção internacional. Há dificuldade de conferir visibilidade ao fenômeno por se tratar de uma questão relativa ao crime organizado ou que envolve a prática de corrupção, e pela fragilidade das redes de notificação existentes nas estruturas governamentais.'];
const msg_trocsex = ['TROCAS SEXUAIS','É a oferta de sexo para obtenção de outros favores. Muitas crianças e adolescentes que saem de casa para viver nas ruas mantêm relações sexuais com adultos para garantir sua sobrevivência. Outras utilizam as relações sexuais para obtenção de produtos de "marca" refletindo uma necessidade de consumo imposta pelo nosso modelo de sociedade. Essas práticas são eventuais e realizadas em conjunto com outras estratégias de sobrevivência em que as trocas sexuais não predominam, ocorrem apenas temporariamente. Ou seja, não existe uma ação continuada de trabalho sexual.'];
const msg_turisex = ['TURISMO COM MOTIVAÇÂO E OU EXPLORAÇÂO SEXUAL','É comumente conhecido como "turismo sexual" ou "sexo turismo". Caracteriza-se, por um lado, pela organização de "excursões" turísticas com fins não declarados de proporcionar prazer sexual para turistas estrangeiros ou de outras regiões do País e, por outro, pelo agenciamento de crianças e adolescentes para oferta de serviços sexuais. Investigações apontam que certas agências de turismo, com a cobertura da polícia (sua parte corrupta), facilitam o aliciamento de meninas e meninos para trabalharem no mercado do sexo.'];

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
