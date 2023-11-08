import ProductList from "../components/products/ProductList";

function Products() {
  let listOfItems = [
    {
      id: "a",
      itemName: "Pen",
      image: "",
    },
    {
      id: "b",
      itemName: "Pencil",
      image: "",
    },
    {
      id: "c",
      itemName: "Diary",
      image: "",
    },
  ];

  return (
    <div>
      <h1>I am on the Products page.</h1>
      <ProductList listOfItems={listOfItems} />
    </div>
  );
}
export default Products;
