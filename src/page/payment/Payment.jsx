import { useState, useEffect } from 'react';
import product from '../../product';
import styles from './payment.module.css';

const LETTERS_ONLY = /^[a-zA-Zа-яА-ЯёЁ\s-]*$/;
const NUMBERS_ONLY = /^[0-9+]*$/;

const Payment = () => {
  const [userName, setUserName] = useState('');
  const [numberTelephone, setNumberTelephone] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
  });
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Онлайн'); // значение по умолчанию

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handlePaymentChange = (e) => setPaymentMethod(e.target.value);

  const handleForSubmint = (event) => {
    event.preventDefault(); //убирает перезагрузку странице при клике кнопки
    const paymentData = {
      userName,
      numberTelephone,
      email,
      city,
      address,
      comment,
      paymentMethod,
      totalPrice,
      products: basket,
    };
    // console.log(paymentData);
    alert('Детали заказа: ' + JSON.stringify(paymentData)); //потому-что алерт не показывает объекты
  };

  // Автоматическое скрытие ошибок
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors({ name: '', phone: '' });
    }, 2000);
    return () => clearTimeout(timer);
  }, [errors.name, errors.phone]);

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    if (LETTERS_ONLY.test(value)) {
      setUserName(value);
      setErrors((prev) => ({ ...prev, name: '' }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: 'Имя может содержать только буквы',
      }));
    }
  };

  const handleNumberTelephoneChange = (e) => {
    const value = e.target.value;
    if (NUMBERS_ONLY.test(value)) {
      setNumberTelephone(value);
      setErrors((prev) => ({ ...prev, phone: '' }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "Телефон может содержать только цифры и знак '+'",
      }));
    }
  };

  //получаем данные из sessionStorage
  let cartIds = JSON.parse(sessionStorage.getItem('cartIds')) || [];
  // console.log('basket', cartIds);
  const totalPrice = sessionStorage.getItem('totalPrice');
  // console.log(totalPrice);

  //фильтруем и узнаем что лежит в корзине
  const basket = product
    .filter((item) => cartIds.includes(item.id))
    .map((item) => ({ id: item.id, title: item.title }));

  // console.log(basket);

  return (
    <div className={styles.payment}>
      <h1 className={styles.title}>Оформление заказа</h1>

      <div className={styles.container}>
        {/* Форма */}
        <div className={styles.form}>
          <h2 className={styles.subtitle}>Контактные данные</h2>
          <form onSubmit={handleForSubmint}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={userName}
              required
              onChange={handleUserNameChange}
              className={styles.input}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}

            <input
              type="tel"
              placeholder="Телефон"
              value={numberTelephone}
              onChange={handleNumberTelephoneChange}
              required
              className={styles.input}
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              className={styles.input}
            />

            <h2 className={styles.subtitle}>Адрес доставки</h2>
            <input
              type="text"
              placeholder="Город"
              value={city}
              onChange={handleCityChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Улица, дом, квартира"
              value={address}
              onChange={handleAddressChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Комментарий к заказу"
              value={comment}
              onChange={handleCommentChange}
              className={styles.input}
            />

            <div className={styles.payment}>
              <h2 className={styles.subtitle}>Способ оплаты</h2>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="payment"
                  value="Онлайн"
                  checked={paymentMethod === 'Онлайн'}
                  onChange={handlePaymentChange}
                />{' '}
                Онлайн
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="payment"
                  value="При получении"
                  checked={paymentMethod === 'При получении'}
                  onChange={handlePaymentChange}
                />{' '}
                При получении
              </label>
            </div>
            <button type="submit" className={styles.button}>
              Оформить заказ
            </button>
          </form>
        </div>

        {/* Корзина */}
        <div className={styles.summary}>
          <h2 className={styles.subtitle}>Ваш заказ:</h2>

          {basket.map((el) => {
            return (
              <div key={el.id} className={styles.item}>
                <span>{el.title}</span>
              </div>
            );
          })}

          <hr />
          <div className={styles.total}>
            <strong>Итого:</strong>
            <strong>{totalPrice}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
