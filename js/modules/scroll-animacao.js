export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  function animationScroll() {
    const windowSize = window.innerHeight * 0.6;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const reachElement = (sectionTop - windowSize) < 0;
      if (reachElement) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animationScroll(); // para ativar a função e checar o top do elemento;
    // e dar a classe para a primeira section

    window.addEventListener('scroll', animationScroll);
  }
}
