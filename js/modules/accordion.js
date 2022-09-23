export default function initAccordion() {
  const perguntas = document.querySelectorAll("[data-anime='accordion'] dt")
  const activeClass = "ativo";

  if (perguntas.length) {
    perguntas[0].classList.add(activeClass)
    perguntas[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion () {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    perguntas.forEach((pergunta) => {
      pergunta.addEventListener("click",activeAccordion)
    })
  }
}
