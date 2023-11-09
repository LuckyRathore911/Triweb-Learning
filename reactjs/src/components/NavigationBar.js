import { Link } from "react-router-dom";
import { useContext } from "react";

import FavouriteContext from "../store/ContextFavourite";

import navStyle from "../styles/NavigationBar.module.css";

function NavigationBar() {
  const favouriteContext = useContext(FavouriteContext);
  const totalFavouriteItems = favouriteContext.favouriteItems.length;

  return (
    <header className={navStyle.header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/products">Products</Link>
      <Link to="/products/add">Add Product</Link>
      <Link to="/products/favourite">Favourites{totalFavouriteItems}</Link>
    </header>
  );
}

export default NavigationBar;
