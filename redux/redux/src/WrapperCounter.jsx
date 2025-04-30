import React from 'react';
import { UiCounter } from './UiCounter';
import { Button } from './Button';

export const WrapperCounter = () => {
  return (
    <>
      <UiCounter />
      <Button buttonName={'Increment'} />
      <Button buttonName={'Decrement'} />
      <Button buttonName={'Change By Amout'} />
    </>
  );
};
