import debounce from './debounce.js';

export default class AnimationScroll {
  constructor(content, activeClass) {
    this.contents = document.querySelectorAll(content);
    this.activeClass = activeClass;
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // pega a distancia de cada conteudo e cria um objeto
  getDistance() {
    // [...this.contents] transforma em array para usar o map
    // map consegue retornar uma array, nesse caso de objetos
    this.contentInfo = [...this.contents].map((content) => {
      const { offsetTop } = content;
      return {
        content,
        offsetTop: Math.floor(offsetTop - this.windowMetade),
      };
    });
  }

  // verifica a distancia do topo de cada objeto
  // com o scroll realizado
  checkDistance() {
    this.contentInfo.forEach((contentInfo) => {
      if (contentInfo.offsetTop < window.scrollY) {
        contentInfo.content.classList.add(this.activeClass);
      } else if (contentInfo.content.classList.contains(this.activeClass)) {
        contentInfo.content.classList.remove(this.activeClass);
      }
    });
  }

  // adicionar o evento de scroll
  addAnimationScrollEvent() {
    window.addEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.contents.length) {
      // para ativar a função e checar o top do elemento;
      // e dar a classe para o primeiro conteudo
      this.getDistance();
      this.checkDistance();
      this.addAnimationScrollEvent();
    }
    return this;
  }

  // remover o evento de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
