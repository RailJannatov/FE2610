import { useSelector } from 'react-redux';
import { WrapperCounter } from './WrapperCounter';
import { Form } from './Form';
function App() {
  const { inputValue } = useSelector((state) => state.counter);
  return (
    <>
      <WrapperCounter />
      <Form />
      <p>{inputValue}</p>
    </>
  );
}

export default App;
