import { useEffect, useLayoutEffect } from "react";

export const Home = () => {
  console.log("Home component rendered");

  useEffect(() => {
    console.log("Home component mounted");
  }, []);
  useLayoutEffect(() => {
    console.log("Home component layout effect");
  }, []);

  console.log("Home component re-rendered");

  return <div>This is Home</div>;
};
