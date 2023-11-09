import AddProductForm from "../components/products/AddProductForm";

function AddProduct() {
  function addProductHandler(newProduct) {
    fetch("http://127.0.0.1:3002/product", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <AddProductForm addProductHandler={addProductHandler} />
    </div>
  );
}
export default AddProduct;
