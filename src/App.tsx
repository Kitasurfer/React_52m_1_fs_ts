import GlobalStyles from './styles/GlobalStyles';
import Feedback from './components/Feedback/Feedback';
import Counter from './components/Counter/Counter';
import Product from './components/Product/Product';
import Input from './components/Input/Input';
import AnimalCard from './components/AnimalCard/AnimalCard';
import Button from './components/Button/Button';

//import Lesson08 from './lesson/Lesson08/Lesson08';
import Homework08 from './homeworks/Homework08/Homework08';

function App() {
  return (
    <>
			<Button name="Button" type="button" onClick={() => alert('Button Clicked')} />
      <Feedback title="Feedback" />
			<Input label='Email' name='email' type='email' placeholder='Enter your email' />
      <Counter initialCount={0} />
      <Product name="Sample Product" price={100}  onAddToCart={() => {}}/>
			<AnimalCard animalName="Cat" animalSpecies="Siamese" animalImg='https://imgcdn.stablediffusionweb.com/2024/4/10/cfdb05ef-49e5-49cc-bff0-02f7a7b049f6.jpg' />
		  {/* Topic: Styling components */}
      <Homework08 />
		</>
  );
}

export default App;
