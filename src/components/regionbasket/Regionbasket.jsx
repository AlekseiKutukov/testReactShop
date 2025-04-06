import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import RegionBasketCards from './RegionBasketCards';
import headphones from '../../product';
import BasketContext from '../../context/BasketContext';
import Modal from './../modal/Modal';
import './regionbasket.css';

const Regionbasket = () => {
  const [basketCount, setBasketContext] = useContext(BasketContext);
  const [isEmptyCartModalOpen, setIsEmptyCartModalOpen] = useState(false); // Состояние для модального окна

  const handleCheckoutClick = (e) => {
    if (basketCount === 0) {
      e.preventDefault(); // Предотвращаем переход по ссылке
      setIsEmptyCartModalOpen(true);
    } else {
      sessionStorage.setItem('totalPrice', total.price); // Сохраняем цену
    }
  };

  const closeEmptyCartModal = () => {
    setIsEmptyCartModalOpen(false); // Закрываем модальное окно
  };

  let headphonesId = JSON.parse(sessionStorage.getItem('cartIds')) || [];

  const productBasket = headphones.filter((item) =>
    headphonesId.includes(item.id)
  );

  const [cart, setCart] = useState(productBasket); // изменение состояния продуктов в корзине

  const [total, setTotal] = useState({
    // изменение состояния итоговой цены
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
  });

  useEffect(() => {
    //при изменение массива cart, запускается и пересчитывает состояние
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
    });
  }, [cart]);

  const deleteProduct = (id) => {
    deleteProductArray(id);
    setBasketContext(JSON.parse(sessionStorage.getItem('cartIds')).length - 1);
  };

  const deleteProductArray = (id) => {
    setCart((cart) => {
      headphonesId = headphonesId.filter((el) => el !== id);
      sessionStorage.setItem('cartIds', JSON.stringify(headphonesId));
      return cart.filter((product) => {
        return id !== product.id;
      });
    });
  };

  const increment = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count++,
            priceTotal: product.priceTotal + product.price,
          };
        }
        return product;
      });
    });
  };
  const decrement = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? product.count - 1 : 1,
            priceTotal:
              product.count - 1 < 2
                ? product.price
                : (product.count - 1) * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <RegionBasketCards
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increment={increment}
        decrement={decrement}
      />
    );
  });

  return (
    <div className="basket">
      <div className="basket__title">Корзина</div>
      <div className="basket__block_and_price">
        <div className="basket__block">{products}</div>
        <div className="basket__result__price">
          <div className="basket__result_price__text">ИТОГО</div>
          <div className="basket__result__price__price">{total.price}</div>
          <Link to="/payment" onClick={handleCheckoutClick}>
            <div className="basket__result__price__pay">
              Перейти к оформлению
            </div>
          </Link>

          {/* Модальное окно для пустой корзины */}
          <Modal isOpen={isEmptyCartModalOpen} onClose={closeEmptyCartModal}>
            <p>Добавьте товары в корзину, чтобы продолжить оформление.</p>
            <button className="modal-ok-button" onClick={closeEmptyCartModal}>
              ОК
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Regionbasket;
