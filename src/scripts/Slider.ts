import { findElement } from './utils';

export default class Slider {
  private $root: HTMLElement;
  private $nextBtn: HTMLElement;
  private $prevBtn: HTMLElement;
  private $track: HTMLElement;

  constructor(selector: string, private images: string[], private options: {} = {}) {
    this.$root = findElement(selector);
  }

  public init(): void {
    this.render();
    this.$nextBtn = findElement('.slider__nextBtn');
    this.$prevBtn = findElement('.slider__prevBtn');
    this.$track = findElement('.slider__track');
  }

  private render(): void {
    return this.$root.insertAdjacentHTML(
      'beforeend',
      ` 
    <div class="slider">
      <div class="slider__track">
        ${this.images.map((img, index) => this.renderItem(img, index + 1)).join('')}
      </div>
      <div class="slider__nextBtn">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="slider__prevBtn">
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>
    `
    );
  }

  private renderItem(imgSrc: string, slideNumber: number): string {
    return `
    <div class="slider__item">
      <img src="${imgSrc}" alt="slide${slideNumber}"/>
    </div>
    `;
  }

  private addListeners(): void {
    
  }
}
