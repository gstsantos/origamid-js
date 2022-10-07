import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const arrayEventos = ['touchstart', 'click'];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, arrayEventos, () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    arrayEventos.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
