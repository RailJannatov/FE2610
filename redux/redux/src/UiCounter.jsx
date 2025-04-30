import { useSelector } from 'react-redux';

export const UiCounter = () => {
  const { countValue } = useSelector((state) => state.counter);

  return <p style={{ fontSize: '50px' }}>{countValue}</p>;
};
