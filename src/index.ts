import './styles/main.scss';
import Header from './scripts/Header';
import Slider from './scripts/Slider';
import Service from './scripts/Sevice';
import Footer from './scripts/Footer';
import Team from './scripts/Team';
import Contacts from './scripts/Contacts';
import slide1 from './images/gallery/IMG-20200414-WA0001.jpg';
import slide2 from './images/gallery/IMG-20200414-WA0002.jpg';
import slide3 from './images/gallery/IMG-20200414-WA0003.jpg';
import slide4 from './images/gallery/IMG-20200414-WA0004.jpg';
import slide5 from './images/gallery/IMG-20200414-WA0005.jpg';
import slide6 from './images/gallery/IMG-20200414-WA0006.jpg';
import slide7 from './images/gallery/IMG-20200414-WA0007.jpg';
import slide8 from './images/gallery/IMG-20200414-WA0008.jpg';
import slide9 from './images/gallery/IMG-20200414-WA0009.jpg';
import slide10 from './images/gallery/IMG-20200414-WA0010.jpg';
import slide11 from './images/gallery/IMG-20200414-WA0011.jpg';
import slide12 from './images/gallery/IMG-20200414-WA0012.jpg';
import slide13 from './images/gallery/IMG-20200414-WA0013.jpg';
import slide14 from './images/gallery/IMG-20200414-WA0014.jpg';
import slide15 from './images/gallery/IMG-20200414-WA0015.jpg';
import slide16 from './images/gallery/IMG-20200414-WA0016.jpg';
import slide17 from './images/gallery/IMG-20200414-WA0017.jpg';
import slide18 from './images/gallery/IMG-20200414-WA0018.jpg';
import slide19 from './images/gallery/IMG-20200414-WA0019.jpg';
import slide20 from './images/gallery/IMG-20200414-WA0020.jpg';

window.addEventListener('DOMContentLoaded', () => {
  const header = new Header(),
    service = new Service(),
    team = new Team(),
    slider = new Slider('.gallery', [
      slide1,
      slide2,
      slide3,
      slide4,
      slide5,
      slide6,
      slide7,
      slide8,
      slide9,
      slide10,
      slide11,
      slide12,
      slide13,
      slide14,
      slide15,
      slide16,
      slide17,
      slide18,
      slide19,
      slide20,
    ]),
    contacts = new Contacts(),
    footer = new Footer();

  header.init();
  team.init();
  slider.init();
  slider.autoPlay();
  contacts.init();
  service.init();
  footer.init();
});
