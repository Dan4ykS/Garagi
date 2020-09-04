import './styles/main.scss';
import Header from './scripts/Header';
import Slider from './scripts/Slider';
import Footer from './scripts/Footer';

window.addEventListener('DOMContentLoaded', () => {
  const header = new Header(),
    slider = new Slider(),
    footer = new Footer();

  footer.init();
});
