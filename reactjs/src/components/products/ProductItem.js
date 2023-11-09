import { useContext } from "react";

import CustomWrapper from "../CustomWrapper";
import FavouriteContext from "../../store/ContextFavourite";

function ProductItem(props) {
  const favouriteContext = useContext(FavouriteContext);
  const isFavourite = favouriteContext.isFavouriteItem(props.item._id);

  const toggleFavourite = () => {
    if (isFavourite) {
      favouriteContext.removeFavouriteItem(props.item._id);
      console.log("removed");
    } else {
      favouriteContext.addFavouriteItem({ ...props.item });
      console.log("added");
    }
  };

  return (
    <li key={props.item._id}>
      <CustomWrapper>
        <h2>{props.item.itemName}</h2>
        <img
          src={props.item.image}
          height="150rem"
          width="150rem"
          alt="item_image"
        ></img>
        <p>{props.item.description}</p>
        <button onClick={toggleFavourite}>
          {isFavourite ? "Favourite" : "Normal"}
        </button>
      </CustomWrapper>
    </li>
  );
}

export default ProductItem;
