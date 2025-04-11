import { Header } from "./Header";

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>some footer content</footer>
    </>
  );
};
