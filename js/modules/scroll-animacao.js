export default function initAnimationScroll () {
  const sections = document.querySelectorAll("[data-anime='scroll']")
  if (sections.length) {
   
    function animationScroll() {
      const windowSize = window.innerHeight * 0.6;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const reachElement = (sectionTop - windowSize) < 0;
        if (reachElement){
          section.classList.add("ativo")
        } else {
          section.classList.remove("ativo")
        }
      });
    }

    animationScroll(); //para ativar a função e checar o top do elemento pra dar a classe pro primeiro item

    window.addEventListener("scroll",animationScroll)
  }
}

// ANIMAÇÃO AO SCROLL

/* CÓDIGO SOZINHO
function initAnimationScroll () {
  const sections = document.querySelectorAll(".js-scroll")
  if (sections.length) {
   
    function animationScroll() {
      const scrollWindow = window.innerHeight + window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop + 150;
        
        if (scrollWindow > sectionTop) {
          section.classList.add("ativo")
        } else {
          section.classList.remove("ativo")
        }
      });
    }
    animationScroll(); // para ativar a função e checar o top do elemento pra dar a classe
    window.addEventListener("scroll",animationScroll)
  }
}
initAnimationScroll();
*/

// CORREÇÕES E OTIMIZAÇÕES

//ANIMAR AO SCROLL
/*
function initAnimationScroll () {
  const sections = document.querySelectorAll(".js-scroll")
  if (sections.length) {
   
    function animationScroll() {
      const windowSize = window.innerHeight * 0.6;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const reachElement = (sectionTop - windowSize) < 0;
        if (reachElement){
          section.classList.add("ativo")
        } else {
          section.classList.remove("ativo")
        }
      });
    }

    animationScroll(); //para ativar a função e checar o top do elemento pra dar a classe pro primeiro item

    window.addEventListener("scroll",animationScroll)
  }
}
initAnimationScroll();

*/