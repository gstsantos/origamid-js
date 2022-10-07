export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

  function scrollContent(event) {
    event.preventDefault();
    const linkHref = event.currentTarget.getAttribute('href');
    const contentLink = document.querySelector(linkHref);

    contentLink.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollContent);
  });
}
