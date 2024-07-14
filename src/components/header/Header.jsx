import './header.css'
import heartImg from './../../img/icons/heart.svg'
import basketImg from './../../img/icons/basket.svg'
import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "./../../Context";


function Header(){   
    
    const [context, setContext] = useContext(Context);

    return(        
        <header className='header'>
            <div className='container'>
                <div className='header__row'>
                    <Link to="/"><div className='header__logo' title='Вернуться на главную'>QPICK</div></Link>                    
                    <div className='header__icons'>
                        <div className='header__icons__heart'>
                            <Link to="/"><img src={heartImg} alt="Добавить в желаемое" title="Добавить в желаемое" /></Link> 
                            <span id='countHeart'>0</span>
                        </div>
                        <div className='header__icons__basket'>
                            <Link to="/basket"><img src={basketImg} alt='Корзина' title='Корзина' /></Link>  
                            <span id='countBasket'>{context}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;