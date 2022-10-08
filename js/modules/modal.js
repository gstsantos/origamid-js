export default class Modal {
  constructor(botaoAbrir, botaoFechar, modalContainer) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(modalContainer);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  // ativa ou fecha o modal
  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fechar o modal ao clicar fora dele
  clickOut(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.clickOut);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvents();
    }
  }
}
