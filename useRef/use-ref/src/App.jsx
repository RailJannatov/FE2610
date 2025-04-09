import "./App.css";
import React, { useContext, useState } from "react";

import { UserProvider, UserContext } from "./inputContext";
function App() {
  const ref = React.useRef(null);
  const [list, setList] = useState([]);

  console.log("re-render");

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleInput = (e) => {
    ref.current = e.target.value;
    console.log("reff", ref.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prev) => [...prev, ref.current]);
  };

  return (
    <UserProvider>
      {/* <Layout>
        <form action="" onSubmit={handleSubmit}>
          <p>use Ref</p>
          <input type="text" ref={ref} onChange={(e) => handleInput(e)} />
        </form>
        {list?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Layout> */}

      <Wrapper>
        <p>version_1</p>
        <div>
          <p>title</p>
          <p>subtitle</p>
        </div>
        <div></div>
      </Wrapper>

     

      <Wrapper>
        <div>
          <p>title</p>
          <p>subtitle</p>
        </div>
        <div>
          <p>version_2</p>
        </div>
      </Wrapper>
    </UserProvider>
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
