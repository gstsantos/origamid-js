import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, userEvents, activeClass) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (userEvents === undefined) {
      this.userEvents = ['click', 'touchstart'];
    } else {
      this.userEvents = userEvents;
    }

    this.activeClass = activeClass;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    event.preventDefault();
    outsideClick(this.menuList, this.userEvents, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.userEvents.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
