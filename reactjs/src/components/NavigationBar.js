import { Link } from "react-router-dom";

import "../styles/NavigationBar.css";

function NavigationBar() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </header>
  );
}

export default NavigationBar;
