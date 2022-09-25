import outsideClick from "./outsideclick.js"

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click","touchstart"];

  if (menuButton) {
    function openMenu(event) {
      if (event.type === "touchstart") {
        menuList.classList.add("active")
        menuButton.classList.add("active")
        event.preventDefault()
      } else {
        menuList.classList.add("active")
        menuButton.classList.add("active")
        event.preventDefault()
      }
      
      outsideClick(menuList,eventos,() => {
        menuList.classList.remove("active")
        menuButton.classList.remove("active")
      })
    }
    eventos.forEach((evento) =>{
      menuButton.addEventListener(evento,openMenu);
    })
  }
  
}