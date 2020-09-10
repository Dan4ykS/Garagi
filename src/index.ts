import './styles/main.scss';
import Header from './scripts/Header';
import Slider from './scripts/Slider';
import Service from './scripts/Sevice';
import Footer from './scripts/Footer';
import Team from './scripts/Team';
import Contacts from './scripts/Contacts';
import slide1  from './images/gallery/IMG-20200414-WA0001.jpg';
import slide2 from './images/gallery/IMG-20200414-WA0002.jpg';
import slide3 from './images/gallery/IMG-20200414-WA0003.jpg';

window.addEventListener('DOMContentLoaded', () => {
  const header = new Header(),
    service = new Service(),
    team = new Team(),
    slider = new Slider('.gallery', [slide1, slide2, slide3]),
    contacts = new Contacts(),
    footer = new Footer();

  header.init();
  team.init();
  slider.init();
  contacts.init();
  service.init();
  footer.init();
});
