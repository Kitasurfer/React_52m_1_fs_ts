import './App.css';
import Feedback from './components/Feedback/Feedback';
import Counter from './components/Counter/Counter';
import Product from './components/Product/Product';

function App() {
  return (
    <div>
      <Feedback title="Feedback" />
     {/*  <Counter initialCount={0} />
      <Product name="Sample Product" price={100} /> */}
    </div>
  );
}

export default App;
