import CustomWrapper from "../CustomWrapper";

function ProductItem(props) {
  return (
    <CustomWrapper>
      <li key={props.key}>
        <h2>{props.item.itemName}</h2>
        <img
          src={props.item.image}
          height="150rem"
          width="150rem"
          alt="item_image"
        ></img>
        <p>{props.item.description}</p>
      </li>
    </CustomWrapper>
  );
}

export default ProductItem;
