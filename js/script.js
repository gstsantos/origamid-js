import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import AnimationScroll from './modules/scroll-animacao.js';

// argumentos = links internos, options
const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

// argumentos = lista do accordion, classe
const accordion = new Accordion("[data-anime='accordion'] dt", 'ativo');
accordion.init();

// argumentos = menu, conteudo
const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

// argumentos = botao de abrir o modal, botao de fechar o modal e o container do modal
const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']");
modal.init();

// argumentos = tooltip
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropDownMenu();
initMenuMobile();
initFuncionamento();
// argumentos = url da api, e o alvo onde será adicionado os items da api
fetchAnimais('../../animaisapi.json', '.numeros-grid');

// argumentos = url da api de bitcoin e o target onde o valor será colocado
fetchBitcoin('https://blockchain.info/ticker', '.btc-valor');

// argumentos = conteudos que serão animados ao scroll e a classe que será ativada
const animationScroll = new AnimationScroll("[data-anime='scroll']", 'ativo');
animationScroll.init();
