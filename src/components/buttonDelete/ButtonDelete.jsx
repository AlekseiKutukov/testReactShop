import imgDelete from './../../img/icons/delete.svg'

const ButtonDelete = ({ deleteProduct, id}) =>{
    return(
        <img className='basket__product__delete button' src={imgDelete} alt='удалить' onClick={()=>{deleteProduct(id);}}></img>//обернуто в стрелочную функ., чтобы она срабатывала только после клика
    )
}

export default ButtonDelete;






