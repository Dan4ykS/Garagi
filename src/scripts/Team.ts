import { findAllElements } from './utils';

export default class Team {
  private teamContentItems: NodeListOf<HTMLElement>;

  constructor() {
    this.teamContentItems = findAllElements('.team__content .item');
  }

  public init(): void {
    this.addListeners();
  }

  private addListeners(): void {
    this.teamContentItems.forEach((item) => {
      item.addEventListener('mouseenter', (e) => this.toggleInfo(e, 'open'));
      item.addEventListener('mouseleave', (e) => this.toggleInfo(e, 'close'));
    });
  }

  private toggleInfo(e: MouseEvent, mode: 'open' | 'close'): void {
    const element = e.target as HTMLElement,
      elementImg = element.firstElementChild,
      elementInfo = element.lastElementChild;

    if (mode === 'open') {
      elementImg.classList.add('item__img_onMouseEnter');
      elementInfo.classList.add('item__info_active');
    } else {
      elementImg.classList.remove('item__img_onMouseEnter');
      elementInfo.classList.remove('item__info_active');
    }
  }
}
