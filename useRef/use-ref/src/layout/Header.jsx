import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/contact-us"> Contact Us</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
