export default class AnimationScroll {
  constructor(content, activeClass) {
    this.contents = document.querySelectorAll(content);
    this.animationScroll = this.animationScroll.bind(this);
    this.activeClass = activeClass;
  }

  animationScroll() {
    const windowSize = window.innerHeight * 0.6;
    this.contents.forEach((content) => {
      const contentTop = content.getBoundingClientRect().top;
      const reachElement = (contentTop - windowSize) < 0;
      if (reachElement) {
        content.classList.add(this.activeClass);
      } else if (content.classList.contains(this.activeClass)) {
        content.classList.remove(this.activeClass);
      }
    });
  }

  addAnimationScrollEvent() {
    window.addEventListener('scroll', this.animationScroll);
  }

  init() {
    if (this.contents.length) {
      // para ativar a função e checar o top do elemento;
      // e dar a classe para o primeiro conteudo
      this.animationScroll();
      this.addAnimationScrollEvent();
    }
  }
}
