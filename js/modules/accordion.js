export default class Accordion {
  constructor(lista, classe) {
    this.accordionList = document.querySelectorAll(lista);
    this.classeAtivar = classe;
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classeAtivar);
    item.nextElementSibling.classList.toggle(this.classeAtivar);
  }

  // adicionar os eventos ao accordion
  ativarAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.ativarAccordionEvent();
    }
    return this;
  }
}
