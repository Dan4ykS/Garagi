import { findElement, findAllElements, createObserver } from './utils';

export default class Header {
  private $header: HTMLElement;
  private $navLink: NodeListOf<HTMLElement>;
  private $hamburger: HTMLElement;
  private $mobileMenu: HTMLElement;
  private headerHeight: number;
  private greetingHeight: number;
  private platform: 'mobile' | 'desctop';

  constructor() {
    this.$header = findElement('.header');
    this.$navLink = findAllElements('.header__item a');
    this.$hamburger = findElement('.header__humburger');
    this.$mobileMenu = findElement('.header__menu');
    this.greetingHeight = +findElement('.greeting').offsetHeight;
    this.platform = window.screen.width > 575 ? 'desctop' : 'mobile';
    if (this.platform === 'desctop') {
      this.headerHeight = +getComputedStyle(findElement(':root')).getPropertyValue('--headerHeight').split('px')[0];
      this.$navLink = findAllElements('.header__item a');
      this.initNavigation();
    } else {
      this.headerHeight = +getComputedStyle(findElement(':root')).getPropertyValue('--headerHeightMobile').split('px')[0];
      this.$navLink = findAllElements('.header__menu a');
    }

    this.addListeners();
  }

  public init(): void {
    window.addEventListener('scroll', () => {
      if (scrollY > this.headerHeight) {
        this.$header.classList.add('header_active');
      } else if (screenY < this.greetingHeight) {
        this.clearActive();
      } else {
        this.$header.classList.remove('header_active');
      }
    });
  }

  private initNavigation(): void {
    const sections = findAllElements('section'),
      observer = createObserver((elements, observer) => {
        this.clearActive();
        elements.forEach((elem) => {
          if (elem.intersectionRatio > 0.5) {
            const sectionClass = elem.target.className;
            this.addActive(sectionClass);
          }
        });
      });

    sections.forEach((section) => observer.observe(section));
  }

  private addListeners(): void {
    this.$navLink.forEach((link) => {
      link.addEventListener('click', (e) => {
        const element = e.target as HTMLElement,
          classToScroll = element.dataset['to'],
          parent = element.parentElement;

        this.clearActive();
        element.classList.add('header__item_active');
        if (parent.classList.contains('header__menu')) {
          this.$hamburger.classList.toggle('header__humburger_active');
          this.$mobileMenu.classList.toggle('header__menu_active');
        }
        this.scrollToElem(classToScroll);
      });
    });
    this.$hamburger.addEventListener('click', () => {
      this.$hamburger.classList.toggle('header__humburger_active');
      this.$mobileMenu.classList.toggle('header__menu_active');
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
    const scrollHeight = findElement(`.${selector}`).getBoundingClientRect()['top'] + pageYOffset,
      offsetFormTop = scrollHeight - (this.headerHeight + (this.platform === 'desctop' ? 50 : 0));

    window.scrollTo({
      top: offsetFormTop,
      behavior: 'smooth',
    });
  }
}
