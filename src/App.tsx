/* /* import GlobalStyles from './styles/GlobalStyles';
import Feedback from './components/Feedback/Feedback';
import Counter from './components/Counter/Counter';
import Product from './components/Product/Product';
import Input from './components/Input/Input';
import AnimalCard from './components/AnimalCard/AnimalCard';
import Button from './components/Button/Button';

//import Lesson08 from './lesson/Lesson08/Lesson08';
import Homework08 from './homeworks/Homework08/Homework08';
import Lesson08 from './lesson/Lesson08/Lesson08'; 
import Lesson09 from './lesson/Lesson09/Lesson09';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
			<GlobalStyles />
		{/* 	<Button name="Button" type="button" onClick={() => alert('Button Clicked')} />
      <Feedback
      title="Feedback"
      initialLikes={0}
      initialDislikes={0}
      theme="light"
      onReaction={(type) => console.log('Reaction:', type)}
    />
			<Input label='Email' name='email' type='email' placeholder='Enter your email' />
      <Counter initialCount={0} />
      <Product name="Sample Product" price={100}  onAddToCart={() => {}}/>
			<AnimalCard animalName="Cat" animalSpecies="Siamese" animalImg='https://imgcdn.stablediffusionweb.com/2024/4/10/cfdb05ef-49e5-49cc-bff0-02f7a7b049f6.jpg' />
		  {/* Topic: Styling components 
      <Homework08 /> 
			<Lesson09 />
		</>
  );
}

export default App;
 */


import GlobalStyles from './styles/GlobalStyles'
//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06'
// import Lesson07 from './lessons/Lesson07/Lesson07'
// import Lesson08 from './lessons/Lesson08/Lesson08'
import Lesson09 from './lesson/Lesson09/Lesson09';
import Consultation_04 from './consultations/Consultation_04/Consultation_04';

//homeworks
// import Homework08 from './homeworks/Homework08/Homework08'
//consultations
// import Consultation03 from './consultations/Consultation03/Consultation03'

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Topic: TypeScript - Introduction */}
      {/* <Lesson06/> */}
      {/* <Consultation03/> */}
      {/* Topic: TypeScript - Object types, enum */}
      {/* <Lesson07 /> */}
      {/* Topic: Styling components */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* Topic: Control components, useEffect */}
      <Lesson09 />
			{/* <Consultation_04 /> */}
    </>
  )
}
export default App
