import './cards.css';
import star from './../../img/icons/star.svg';
import React, { useContext } from "react";
import { Context } from "./../../Context";

const Cards = ({ id, title, img, price, oldprice, rate }) =>{

    const [context, setContext] = useContext(Context);

    const handleClick = () => {

        let cartIds = JSON.parse(sessionStorage.getItem('cartIds')) || [];

        if (!cartIds.includes(id)) {
            cartIds.push(id);
            sessionStorage.setItem('cartIds', JSON.stringify(cartIds));
        }
        let lengthBasket = JSON.parse(sessionStorage.getItem('cartIds')).length;
        return (setContext(lengthBasket))
    }

    const checkOldPrice = (oldprice) => {
        if (oldprice) {
          const newOldPrice = oldprice + '\u20BD';
          return <span className='cards__price__discont'>{newOldPrice}</span>;
        }
        return null;
      }

const arrayBasket = [0.0]//это небольшой костыль, чтобы заработал проект, нужно срочно было выложить для MaDeLa(JSON.parse(sessionStorage.getItem('cartIds')));

let cliclYesAndNoo = arrayBasket.includes(id) ? <div className='cards__buy'>Уже в корзине</div> : <div className='cards__buy button' onClick={handleClick}>Купить</div> ;

    return (
        <div className='cards'>
            <div className='cards__img__block'>
                <img className='cards__img' src={img} alt={title}></img>
            </div>
            <div className='cards__body'>
                <div className='cards__title'>{title}</div>
                <div className='cards__price'>
                    <span className='cards__price__actual'>{price}</span>
                    {checkOldPrice(oldprice)}
                </div>
                <div className='cards__raiting'>
                    <img className='cards__raiting__icon' src={star} alt='рейтинг'></img>
                    <span className='cards__raiting__text'>{rate}</span>
                </div>
                   {cliclYesAndNoo}
            </div>
        </div>
    )
}

export default Cards;









