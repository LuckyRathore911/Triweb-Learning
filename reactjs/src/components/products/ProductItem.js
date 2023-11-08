function ProductItem(props) {
  return (
    <div>
      <li key={props.key}>{props.item.itemName}</li>
    </div>
  );
}

export default ProductItem;
