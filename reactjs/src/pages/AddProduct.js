import { useNavigate } from "react-router-dom";

import AddProductForm from "../components/products/AddProductForm";

function AddProduct() {
  const navigate = useNavigate();

  function addProductHandler(newProduct) {
    fetch("http://127.0.0.1:3002/product", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/", { replace: true }))
      //replace doesn't maintain the path history rather replaces the current url with what is written here.
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <AddProductForm addProductHandler={addProductHandler} />
    </div>
  );
}
export default AddProduct;
