import './styles.css';
import Product from "../../components/Product/Product";

interface ProductItem {
  id: number;
  name: string;
  price: number;
}

const Homework05 = () => {
  const products: ProductItem[] = [
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 1.0 },
    { id: 3, name: "Orange", price: 2.0 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product 
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Homework05;