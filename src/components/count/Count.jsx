import imgIncrement from './../../img/icons/increment.svg'
import imgDecrement from './../../img/icons/decrement.svg'

const Count = ({count, increment, id, decrement}) =>{
return (
        <>    
          <img className='basket__product__count__img__decrement button' onClick={()=>{decrement(id)}} src={imgDecrement} alt='убавить'></img>
            <div className='basket__product__count__result'>{count}</div>
          <img className='basket__product__count__img__increment button' onClick={()=>{increment(id)}} src={imgIncrement} alt='добавить'></img> {/*обернуто в стрелочную функ., чтобы она срабатывала только после клика */}
        </>
        )
}

export default Count;

