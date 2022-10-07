export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent(event) {
    event.preventDefault();
    const linkHref = event.currentTarget.getAttribute('href');
    const contentLink = document.querySelector(linkHref);

    contentLink.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToContent);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }

    return this;
  }
}
