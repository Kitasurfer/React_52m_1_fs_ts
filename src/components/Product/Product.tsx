import './styles.css';
import { ProductProps } from './types';

function Product ({
	 name, 
	 price, 
	 onAddToCart 
	}: ProductProps){
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;