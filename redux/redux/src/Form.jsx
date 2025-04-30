import { useDispatch } from 'react-redux';

import { changeInputValue } from './counterSlice';

export const Form = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(changeInputValue({ type: 'input', payload: e.target.value }));
  };

  return <input type='text' onChange={handleInput} />;
};
