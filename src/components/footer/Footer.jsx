import { Link } from 'react-router-dom';
import './footer.css';
import vk from './../../img/icons/VK.svg';
import telegram from './../../img/icons/Telegram.svg';
import whatsapp from './../../img/icons/Whatsapp.svg';
import langImg from './../../img/icons/lang.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <div className="footer__logo" title="Вернуться на главную">
          QPICK
        </div>
      </Link>
      <div className="footer__link__lang">
        <div className="footer__link">
          <ul>
            <Link to="/favorites">
              <li>Избранное</li>
            </Link>
            <Link to="/basket">
              <li>Корзина</li>
            </Link>
            <Link to="/contacts">
              <li>Контакты</li>
            </Link>
          </ul>
        </div>
        <div className="footer__link__next">
          <Link to="/servis">
            <li>Условия сервиса</li>
          </Link>
          <span className="lang">
            <img src={langImg} alt="Язык сайта" />
            <span className="lang__icon"></span>
            <span className="lang__ru" title="Переключить язык на русский">
              Рус
            </span>
            <span className="lang__en" title="Switch language to English">
              Eng
            </span>
          </span>
        </div>
      </div>
      <div className="footer__social">
        <a
          href="https://vk.com/icommunity"
          title="Мы в вконтакте"
          target="blank"
        >
          <img src={vk} alt="Вконтакте" />
        </a>
        <a
          href="https://tlgrm.ru/channels/@appleinside"
          title="Мы в телеграм"
          target="blank"
        >
          <img src={telegram} alt="Телеграм" />
        </a>
        <a href="https://www.example.com" title="Мы в WhatsApp" target="blank">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
