import './styles.css';

interface ProductProps {
	
  name: string;
  price: number;
}

const Product = ({ name, price }: ProductProps) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;