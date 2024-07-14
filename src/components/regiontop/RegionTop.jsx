import './regiontop.css';
import Cards from './../cards/Cards';
import product from '../../product';

const RegionTop = () =>{

    const productFilter = product.filter(item => item.category === 'headphones');
    
    return (
        <div className='region__top'>
            <div className='region__top__title'>
            Наушники
            </div>
            <div className='region__top__cards'>
                {productFilter.map((product) => (
                    <Cards key={product.id} id={product.id} title={product.title} img={product.img} price={product.price} oldprice={product.oldPrice} rate={product.rate} count={product.count} />
                ))}
            </div>
            
        </div>
    )
}

export default RegionTop;