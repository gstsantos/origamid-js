export default function initTabNav() {
  const fotoAnimais = Array.from(document.querySelectorAll("[data-tab='menu'] li"));
  const textoAnimais = Array.from(document.querySelectorAll("[data-tab='content'] section"));

  function clickAnimal(index) {
    const classe = textoAnimais[index].dataset.anime;

    textoAnimais.forEach((texto) => {
      texto.classList.remove('ativo');
    });

    textoAnimais[index].classList.add('ativo', classe);
  }

  if (fotoAnimais.length && textoAnimais.length) {
    textoAnimais[0].classList.add('ativo');

    fotoAnimais.forEach((foto, index) => {
      foto.addEventListener('click', () => {
        clickAnimal(index);
      });
    });
  }
}
