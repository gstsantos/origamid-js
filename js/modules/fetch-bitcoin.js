export default function fetchBitcoin(url, target) {
  async function refreshBtc() {
    try {
      const spanBtc = document.querySelector(target);
      const btcResponse = await fetch(url);
      const btcValor = await btcResponse.json();
      spanBtc.innerText = `R$: ${(100 / btcValor.BRL.buy).toFixed(4)}`;
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  refreshBtc();
  setInterval(refreshBtc, 1000 * 30);
}
