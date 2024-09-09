import { useContext } from 'react';
import BasketContext from '../../context/BasketContext';
import './cards.css';
import star from './../../img/icons/star.svg';

const Cards = ({ id, title, img, price, oldprice, rate }) => {
  const [basketContext, setBasketContext] = useContext(BasketContext);

  const handleClick = () => {
    let cartIds = JSON.parse(sessionStorage.getItem('cartIds')) || [];

    if (!cartIds.includes(id)) {
      cartIds.push(id);
      sessionStorage.setItem('cartIds', JSON.stringify(cartIds));
    }
    let lengthBasket = JSON.parse(sessionStorage.getItem('cartIds')).length;
    return setBasketContext(lengthBasket);
  };

  const checkOldPrice = (oldprice) => {
    if (oldprice) {
      const newOldPrice = oldprice + '\u20BD';
      return <span className="cards__price__discont">{newOldPrice}</span>;
    }
    return null;
  };

  try {
    let arrayBasket =
      JSON.parse(sessionStorage.getItem('cartIds')) === null
        ? [0.0]
        : JSON.parse(sessionStorage.getItem('cartIds'));

    let cliclYesAndNoo = arrayBasket.includes(id) ? (
      <div className="cards__buy">Уже в корзине</div>
    ) : (
      <div className="cards__buy button" onClick={handleClick}>
        Купить
      </div>
    );

    return (
      <div className="cards">
        <div className="cards__img__block">
          <img className="cards__img" src={img} alt={title}></img>
        </div>
        <div className="cards__body">
          <div className="cards__title">{title}</div>
          <div className="cards__price">
            <span className="cards__price__actual">{price}</span>
            {checkOldPrice(oldprice)}
          </div>
          <div className="cards__raiting">
            <img
              className="cards__raiting__icon"
              src={star}
              alt="рейтинг"
            ></img>
            <span className="cards__raiting__text">{rate}</span>
          </div>
          {cliclYesAndNoo}

          {/* <button onClick={() => setModal(modal === false ? true : false)}>
            Change user
          </button> */}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Не удалось разобрать cartIds из sessionStorage:', error);
  }
};

export default Cards;
