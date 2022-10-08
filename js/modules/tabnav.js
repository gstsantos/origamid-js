export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = Array.from(document.querySelectorAll(menu));
    this.tabContent = Array.from(document.querySelectorAll(content));
    this.activeClass = 'ativo';
  }

  // ativa o content de acordo com o item clicado
  activeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });

    const classe = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, classe);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar o primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
