import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(menus, userEvents, activeClass) {
    this.dropdownMenus = document.querySelectorAll(menus);

    if (userEvents === undefined) {
      this.userEvents = ['touchstart', 'click'];
    } else {
      this.userEvents = userEvents;
    }

    this.activeClass = activeClass;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdownMenu e adiciona a função que observa
  // o clique fora dele
  activeDropdownMenu(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
