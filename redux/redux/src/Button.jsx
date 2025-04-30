import { useDispatch } from 'react-redux';

import { increment, decrement, changeByAmount } from './counterSlice';
import { useState } from 'react';

export const Button = ({ buttonName }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const handleCounter = () => {
    if (buttonName === 'Increment') {
      dispatch(increment());
    } else if (buttonName === 'Decrement') {
      dispatch(decrement());
    } else if (buttonName === 'artir') {
      dispatch(changeByAmount({ type: 'artir', payload: value }));
    } else {
      dispatch(changeByAmount({ type: 'test', payload: value }));
    }
  };

  return (
    <>
      <input type='text' onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleCounter}>{buttonName}</button>
    </>
  );
};
