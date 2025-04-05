import { useContext, useState, useEffect } from 'react';
import BasketContext from '../../context/BasketContext';
import './cards.css';
import star from './../../img/icons/star.svg';

const Cards = ({ id, title, img, price, oldprice, rate, description }) => {
  const [, setBasketContext] = useContext(BasketContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    //Убираем возможность скрола при открытом модальном окне
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <div className="cards__info button" onClick={openModal}>
            Подробнее
          </div>
        </div>

        {/* Модальное окно */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>{title}</h2>
              <div className="img_info">
                <div className="img">
                  <img
                    src={img}
                    alt={title}
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                  />
                </div>
                <div className="info__product">
                  <div class="detail-row">
                    <div className="price">Цена:</div>
                    <div className="value">{price + ' \u20BD'}</div>
                  </div>
                  {oldprice ? (
                    <>
                      <div class="detail-row">
                        <div className="old__price">Старая цена:</div>
                        <div className="old__value">{oldprice + ' \u20BD'}</div>
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                  <div class="detail-row">
                    <div className="rait">Рейтинг:</div>
                    <div className="rait__value">{rate}</div>
                  </div>
                </div>
              </div>

              <div
                className="product__description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Не удалось разобрать cartIds из sessionStorage:', error);
  }
};

export default Cards;
