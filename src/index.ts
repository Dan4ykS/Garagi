import './styles/main.scss';
import Header from './scripts/Header';
import Slider from './scripts/Slider';
import Service from './scripts/Sevice';
import Footer from './scripts/Footer';
import Team from './scripts/Team';
import Contacts from './scripts/Contacts';

window.addEventListener('DOMContentLoaded', () => {
  const header = new Header(),
    service = new Service(),
    team = new Team(),
    slider = new Slider(),
    contacts = new Contacts(),
    footer = new Footer();

  header.init();
  team.init();
  contacts.init();
  service.init();
  footer.init();
});
