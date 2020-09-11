import { findElement, findAllElements } from './utils';
import { ISOptions } from './intarfaces';

export default class Slider {
  private $root: HTMLElement;
  private $nextBtn: HTMLElement;
  private $prevBtn: HTMLElement;
  private $track: HTMLElement;
  private $slides: NodeListOf<HTMLElement>;
  private position: number;
  private movePosition: number;
  private slidesToShow: number;
  private slidesToScroll: number;
  private slideWidth: number;
  private allScrollWidth: number;

  constructor(selector: string, private images: string[]) {
    this.$root = findElement(selector);
  }

  public init(): void {
    this.render();
    this.$nextBtn = findElement('.slider__nextBtn');
    this.$prevBtn = findElement('.slider__prevBtn');
    this.$track = findElement('.slider__track');
    this.$slides = findAllElements('.slider__item');
    this.position = 0;
    this.slidesToShow = window.screen.width > 575 ? 2 : 1;
    this.slidesToScroll = window.screen.width > 575 ? 2 : 1;
    this.slideWidth = +this.$track.clientWidth / this.slidesToShow;
    this.movePosition = this.slidesToScroll * this.slideWidth;
    this.allScrollWidth = this.slideWidth * this.images.length;
    this.$slides.forEach((item) => {
      item.style.minWidth = `${this.slideWidth}px`;
    });
    this.addListeners();
  }

  public turnToNextSlide(slidesToScroll: number = this.slidesToScroll): void {
    const movePosition = slidesToScroll ? slidesToScroll * this.slideWidth : this.movePosition,
      slideLeft = Math.round(
        this.images.length - (Math.abs(this.position) + this.slidesToShow * this.slideWidth) / this.slideWidth
      );
    this.position -= slideLeft >= this.slidesToScroll ? movePosition : slideLeft * this.slideWidth;
    if (slideLeft === 0) {
      this.position = 0;
    }
    this.setPosition();
  }

  public turnToPrevSlide(): void {
    const slideLeft = Math.round(Math.abs(this.position) / this.slideWidth);
    this.position += slideLeft >= this.slidesToScroll ? this.movePosition : slideLeft * this.slideWidth;
    if (slideLeft === 0) {
      this.position -= this.allScrollWidth - this.slidesToShow * this.slideWidth;
    }
    this.setPosition();
  }

  public autoPlay(): void {
    setInterval(() => {
      this.turnToNextSlide(1);
    }, 10500);
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
    this.$nextBtn.addEventListener('click', () => {
      this.turnToNextSlide();
    });
    this.$prevBtn.addEventListener('click', () => {
      this.turnToPrevSlide();
    });
  }

  private setPosition(): void {
    this.$track.style.transform = `translateX(${this.position}px)`;
  }
}
