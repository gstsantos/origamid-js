import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // cria a div onde é colocado dentro as informações dos animais
  function createAnimaisDiv(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3> ${animal.especie} </h3><span data-numero> ${animal.total} </span>`;
    return div;
  }

  // coloca a div pronta no DOM
  function preencherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimaisDiv(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // animar números de cada animal
  function animaNumeroAnimais() {
    // parâmetros = numeros a serem animados, observer Target e a classe que o observer Target
    // irá observar em caso de mutação
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // cria as informações dos animais por fetch
  async function criarAnimais() {
    try {
      // fetch, espera a response e transforma em json
      const animaisApi = await fetch(url);
      const animaisApiJson = await animaisApi.json();

      // ativa as funções de preencher cada item do json e
      // animar eles
      animaisApiJson.forEach((animal) => preencherAnimais(animal));
      animaNumeroAnimais();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  return criarAnimais();
}
