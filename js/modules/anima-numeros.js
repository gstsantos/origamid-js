export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // incrementa o número 0 até o número total
  static incrementarNumero(numero) {
    const numeroTotal = +numero.innerText;
    const incremento = Math.floor(numeroTotal / 100);
    let cont = 0;
    const animar = setInterval(() => {
      cont += incremento;
      numero.innerText = cont;
      if (cont > numeroTotal) {
        clearInterval(animar);
        numero.innerText = numeroTotal;
      }
    }, 25 * Math.random());
  }

  // ativar o incrementar número para cada número selecionado
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // disconecta o observer e ativa a animação dos números
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o mutationObserver para observar o target em caso de
  // alguma classe se modificar ele ativara o handleMutation
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
