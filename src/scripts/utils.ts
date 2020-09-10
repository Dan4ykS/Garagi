export const findElement = (selector: string): HTMLElement => {
  const elem = document.querySelector(selector);
  if (elem instanceof HTMLElement) {
    return elem;
  } else {
    throw new Error(`Ошибка, элемент с селектором: "${selector}" не найден на странице`);
  }
};

export const findAllElements = (selector: string): NodeListOf<HTMLElement> => {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
  if (elements.length) {
    return elements;
  } else {
    throw new Error(`Ошибка, элементы с селектором: ${selector} не найдены на странице!`);
  }
};

export const createObserver = (
  callback: (elements: IntersectionObserverEntry[], observer: IntersectionObserver) => void
): IntersectionObserver =>
  new IntersectionObserver(
    (elements, observer) => {
      callback(elements, observer);
    },
    { root: null, rootMargin: '0px', threshold: 0.6 }
  );
