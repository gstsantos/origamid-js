export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.funcionamentoDiasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.funcionamentoHorario = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  verificarAberto() {
    const isDayOpen = this.funcionamentoDiasSemana.includes(this.diaAgora);

    const isHourOpen = this.horaAgora >= this.funcionamentoHorario[0]
    && this.horaAgora < this.funcionamentoHorario[1];

    return isDayOpen && isHourOpen;
  }

  ativarAberto() {
    if (this.verificarAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativarAberto();
    }
    return this;
  }
}
