import initAnimaNumeros from './anima-numeros.js';

export default function iniFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3> ${animal.especie} </h3><span data-numero> ${animal.total} </span>`;
    return div;
  }

  async function requestAnimaisApi() {
    try {
      const animaisApi = await fetch('../animaisapi.json');
      const animaisApiJson = await animaisApi.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisApiJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  requestAnimaisApi();
}
