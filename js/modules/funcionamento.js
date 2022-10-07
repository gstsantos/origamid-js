export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const funcionamentoDiasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const funcionamentoHorario = funcionamento.dataset.horario.split(',').map(Number);

  const data = new Date();
  const hourNow = data.getHours();

  const isDayOpen = funcionamentoDiasSemana.includes(data.getDay());
  const isHourOpen = hourNow >= funcionamentoHorario[0] && hourNow < funcionamentoHorario[1];

  if (isDayOpen && isHourOpen) funcionamento.classList.add('aberto');
}
