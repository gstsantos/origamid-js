export default function initFetchBitcoin() {
  const spanBtc = document.querySelector('.btc-valor');

  async function refreshBtc() {
    try {
      const btcResponse = await fetch('https://blockchain.info/ticker');
      const btcValor = await btcResponse.json();
      spanBtc.innerText = `R$: ${(100 / btcValor.BRL.buy).toFixed(4)}`;
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  refreshBtc();
  setInterval(refreshBtc, 1000 * 30);
}
