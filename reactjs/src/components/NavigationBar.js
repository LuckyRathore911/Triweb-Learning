import { Link } from "react-router-dom";

import navStyle from "../styles/NavigationBar.module.css";

function NavigationBar() {
  return (
    <header className={navStyle.header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </header>
  );
}

export default NavigationBar;
