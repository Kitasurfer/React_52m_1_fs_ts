
import { ProductProps } from './types';
import { ProductContainer, ProductTitle } from './styles';

const Product = ({
  name,
  price,
  onAddToCart
}: ProductProps) => {
  return (
    <ProductContainer>
      <ProductTitle>{name}</ProductTitle>
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </ProductContainer>
  );
};

export default Product;