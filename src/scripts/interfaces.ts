interface ICreateObserver {
  options?: {};
  callback: (elements: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
}