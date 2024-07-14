import './regionbasket.css'
import Count from '../count/Count'
import ButtonDelete from '../buttonDelete/ButtonDelete'

const RegionBasketCards = ({product, deleteProduct, increment, decrement }) =>{
    return(
                <div className='basket__product'>
                    <div className='basket__product__img__and__count'>
                        <img className='basket__product__img' src={product.img} alt={product.title}></img>
                        <div className='basket__product__count'>
                            < Count count={product.count} increment={increment} id={product.id} decrement={decrement} />
                        </div>
                    </div>
                    <div className='basket__product__name__price'>
                        < ButtonDelete deleteProduct={deleteProduct} id={product.id} />
                        <div className='basket__product__name__price__block'>
                            <div>
                                <div className='basket__product__name'>{product.title}</div>
                                <div className='basket__product__price'>{product.price}</div>
                            </div>
                        </div>
                        <div className='basket__product__text'>{product.priceTotal}</div> 
                    </div>        
                </div>          
    )
}
export default RegionBasketCards;







