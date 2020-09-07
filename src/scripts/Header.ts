import { findElement, findAllElements } from './utils';

export default class Header {
  private $header: HTMLElement;
  private $navLink: NodeListOf<HTMLElement>;
  private headerHeight: number;
  private greetingHeight: number;

  constructor() {
    this.$header = findElement('.header');
    this.$navLink = findAllElements('.header__item a');
    this.headerHeight = +getComputedStyle(findElement(':root')).getPropertyValue('--headerHeight').split('px')[0];
    this.greetingHeight = findElement('.greeting').offsetHeight;
    this.addListeners();
    this.initNavigation();
  }

  public init(): void {
    window.addEventListener('scroll', () => {
      if (scrollY > this.headerHeight) {
        this.$header.classList.add('header_active');
      } else {
        this.$header.classList.remove('header_active');
      }
    });
  }

  private initNavigation(): void {
    const sections = findAllElements('section'),
      observer = new IntersectionObserver(
        (elements, observer) => {
          this.clearActive();
          elements.forEach((elem) => {
            if (elem.intersectionRatio > 0.8) {
              const sectionClass = elem.target.className;
              this.addActive(sectionClass);
            }
          });
        },
        { root: null, rootMargin: '90px', threshold: 0.8 }
      );

    sections.forEach((section) => observer.observe(section));
  }

  private addListeners(): void {
    this.$navLink.forEach((link) => {
      link.addEventListener('click', (e) => {
        const element = e.target as HTMLElement,
          classToScroll = element.dataset['to'];

        this.clearActive();
        element.classList.add('header__item_active');
        this.scrollToElem(classToScroll);
      });
    });
  }

  private clearActive(): void {
    this.$navLink.forEach((link) => link.classList.remove('header__item_active'));
  }

  private addActive(section: string): void {
    this.$navLink.forEach((link) => {
      if (link.dataset['to'] === section) {
        link.classList.add('header__item_active');
      }
    });
  }

  private scrollToElem(selector: string): void {
    const scrollHeight = findElement(`.${selector}`).getBoundingClientRect()['top'] + pageYOffset;
    window.scrollTo({
      top: scrollHeight - this.headerHeight,
      behavior: 'smooth',
    });
  }
}
