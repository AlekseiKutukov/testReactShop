import './regionbottom.css';
import Cards from './../cards/Cards';
import product from '../../product';

const RegionBottom = () =>{

    const productFilter = product.filter(item => item.category === 'wirelessHeadphones');

    return (
        <div className='region__bottom'>
            <div className='region__bottom__title'>
            Беспроводные наушники
            </div>
            <div className='region__bottom__cards'>
                {productFilter.map((product) => (
                    <Cards key={product.id} id={product.id} title={product.title} img={product.img} price={product.price} oldprice={product.oldPrice} rate={product.rate} count={product.count} />
                ))}
            </div>
        </div>
    )
}

export default RegionBottom;



