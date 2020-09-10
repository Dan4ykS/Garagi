import { findAllElements } from './utils';

export default class Contacts {
  private socialIcons: NodeListOf<HTMLElement>;
  constructor() {
    this.socialIcons = findAllElements('.contacts__social .fab');
    this.addListeners();
  }

  public init(): void {}

  private addListeners(): void {
    this.socialIcons.forEach((icon, index) => {
      if (index === 0) {
        icon.addEventListener('click', () => {
          this.redirectToLink('https://vk.com/garagi_ekb');
        });
      } else if (index === 1) {
        icon.addEventListener('click', () => {
          this.redirectToLink('https://www.instagram.com/garagi_ekb/');
        });
      }
    });
  }

  private redirectToLink(link: string) {
    window.open(link);
  }
}
