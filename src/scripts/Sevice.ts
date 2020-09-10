import { findAllElements, createObserver, findElement } from './utils';

export default class Sevice {
  private serviceItems: NodeListOf<HTMLElement>;
  private recordBtn: HTMLElement;
  constructor() {
    this.serviceItems = findAllElements('.service__item');
    this.recordBtn = findElement('.service .btn-dark');
  }
  public init(): void {
    const itemObserver = createObserver((elements, observer) => {
        elements.forEach((elem) => {
          if (elem.intersectionRatio > 0.2) {
            elem.target.classList.add('service__item_active', 'bounceInUp', 'animated');
          }
        });
      }),
      btnObserver = createObserver((elements, observe) => {
        elements.forEach((elem) => {
          if (elem.intersectionRatio > 0.5) {
            elem.target.classList.add('btn_active' , 'fadeInUp', 'animated');
          }
        });
      });

    this.serviceItems.forEach((item) => itemObserver.observe(item));
    btnObserver.observe(this.recordBtn);
  }
}
