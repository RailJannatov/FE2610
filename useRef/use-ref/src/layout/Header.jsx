import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeProvider';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My Website</h1>
      <button onClick={toggleTheme}>Change Theme</button>
      <nav>
        <ul>
          <li
            className="style"
            // style={{ color: theme === 'light' ? 'red' : 'black' }}
          >
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
