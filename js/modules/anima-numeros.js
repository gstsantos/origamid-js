export default function initAnimaNumeros() {

  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]")
    numeros.forEach((numero) => {
      const numeroTotal = +numero.innerText;
      const incremento = Math.floor(numeroTotal / 100)
      let cont = 0;

      const animar = setInterval(() => {
        cont += incremento
        numero.innerText = cont;
        if(cont > numeroTotal) {
          clearInterval(animar)
          numero.innerText = numeroTotal
        }
      },25 * Math.random())
    })
  }

  function handleMutation(mutation){
    if(mutation[0].target.classList.contains("ativo")) {
      observer.disconnect()
      animaNumeros();
    }
  }
  
  const observerTarget = document.querySelector(".numeros")
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget,{attributes: true})
}

