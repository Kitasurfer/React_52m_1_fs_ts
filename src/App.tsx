import './App.css';
import Feedback from './components/Feedback/Feedback';
import Counter from './components/Counter/Counter';
import Product from './components/Product/Product';
import Input from './components/Input/Input';
import AnimalCard from './components/AnimalCard/AnimalCard';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
			<Button name="Send" type="submit" onClick={() => {}}/>
      <Feedback title="Feedback" />
			<Input name="John" type="text" placeholder="enter your name" />
      <Counter initialCount={0} />
      <Product name="Sample Product" price={100}  onAddToCart={() => {}}/>
			<AnimalCard animalName="Cat" animalSpecies="Siamese" animalImg='https://imgcdn.stablediffusionweb.com/2024/4/10/cfdb05ef-49e5-49cc-bff0-02f7a7b049f6.jpg' />
    </div>
  );
}

export default App;
