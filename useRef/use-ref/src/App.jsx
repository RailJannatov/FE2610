import React, { useContext, useLayoutEffect } from "react";
import "./App.css";

import { UserContext } from "./inputContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { Layout as CustomLayout } from "./layout/Layout";
import { ListItem } from "./pages/ListItem";
import Dashboard from "./layout/Dashboard";
import { Students } from "./pages/Students";

function App() {
  // const ref = React.useRef(null);
  // const [list, setList] = useState([]);

  // console.log("re-render");

  // React.useEffect(() => {
  //   if (ref.current) {
  //     ref.current.focus();
  //   }
  // }, []);

  // const handleInput = (e) => {
  //   ref.current = e.target.value;
  //   console.log("reff", ref.current);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setList((prev) => [...prev, ref.current]);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/list-item/:id" element={<ListItem />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
        <Route path="/dashboard"  element={<Dashboard/>}>
          <Route index element={<Students/>} />
          <Route path="students" element={<div>Something students</div>} />
          <Route path="teacher" element={<div>Teachers</div>} />
        </Route>
      </Routes>
    </Router>
  );
}



export const Layout = ({ children }) => {
  return (
    <>
      <header>Logo</header>
      <main>{children}</main>
      <footer>some footer content</footer>
    </>
  );
};

export const Wrapper = ({ children }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid black", width: "200px", height: "200px" }}>
      <h1>use Context</h1>
      {children}
    </div>
  );
};

export default App;
