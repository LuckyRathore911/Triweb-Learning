import CustomWrapper from "../CustomWrapper";

function ProductItem(props) {
  return (
    <CustomWrapper>
      <li key={props.key}>{props.item.itemName}</li>
    </CustomWrapper>
  );
}

export default ProductItem;
