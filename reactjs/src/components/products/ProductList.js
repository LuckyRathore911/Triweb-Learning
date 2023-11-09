import ProductItem from "./ProductItem";

function ProductList(props) {
  return (
    <div>
      {props.listOfItems.map((item) => {
        return <ProductItem key={item.id} id={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductList;
