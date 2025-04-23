import { useEffect, useState } from 'react';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  console.log('1');

  useEffect(() => {
    console.log('parent');
    return () => {
      console.log('parent cleanup');
    };
  }, []);

  console.log('0');

  return (
    <>
      <button onClick={() => setIsVisible(false)}>Click</button>
      {isVisible && <Child />}
    </>
  );
};

const Child = () => {
  console.log('5');

  useEffect(() => {
    console.log('child');
    return () => {
      console.log('child cleanup');
    };
  }, []);

  console.log('-1');

  return <div>child</div>;
};
