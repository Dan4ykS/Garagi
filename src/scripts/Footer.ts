import { findElement, findAllElements } from './utils';

export default class Footer {
  private $openSidebarIcon: HTMLElement;
  private $openSidebarBtns: NodeListOf<HTMLElement>;
  private $sidebar: HTMLElement;
  private $backDrop: HTMLElement;
  private $upArrow: HTMLElement;
  private $closeSidebar: HTMLElement;

  constructor() {
    this.$openSidebarIcon = findElement('.fa-comment-dots');
    this.$openSidebarBtns = findAllElements('.btn');
    this.$sidebar = findElement('.record');
    this.$backDrop = findElement('.backDrop');
    this.$upArrow = findElement('.fa-caret-up');
    this.$closeSidebar = findElement('.close_record');
  }

  public init(): void {
    this.addListeners();
    window.addEventListener('scroll', () => {
      if (scrollY > 150) {
        this.$openSidebarIcon.classList.remove('hiddenElement');
        this.$upArrow.classList.remove('hiddenElement');
      } else {
        this.$openSidebarIcon.classList.add('hiddenElement');
        this.$upArrow.classList.add('hiddenElement');
      }
    });
  }

  private addListeners(): void {
    [this.$openSidebarIcon, this.$backDrop, this.$closeSidebar, ...this.$openSidebarBtns].forEach((el) => {
      el.addEventListener('click', () => {
        this.toggleSidebar();
        this.toggleBackDrop();
        this.toggleCloseSidebar();
      });
    });
    this.$upArrow.addEventListener('click', () => {
      this.scrollToTop();
    });
  }

  private scrollToTop(): void {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }

  private toggleCloseSidebar(): void {
    this.$closeSidebar.classList.toggle('close_record_active');
  }

  private toggleBackDrop(): void {
    this.$backDrop.classList.toggle('hiddenElement');
  }

  private toggleSidebar(): void {
    this.$sidebar.classList.toggle('record_active');
  }
}
