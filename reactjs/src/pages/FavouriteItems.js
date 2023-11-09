import { useContext } from "react";

import FavouriteContext from "../store/ContextFavourite";
import ProductList from "../components/products/ProductList";

function FavouriteItems() {
  const favouriteContext = useContext(FavouriteContext);
  return (
    <div>
      <h1>I am on the Favourites page.</h1>
      <ProductList listOfItems={favouriteContext.favouriteItems} />
    </div>
  );
}
export default FavouriteItems;
