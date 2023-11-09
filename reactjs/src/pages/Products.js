import { useState, useEffect } from "react";

import ProductList from "../components/products/ProductList";

function Products() {
  let [listOfItems, setListOfItems] = useState([]);
  let [isData, setIsData] = useState(true);

  /*fetch is a promise, which is async and needs to be waited for. 
  We cannot make this functional component Products() async
  Thus we need to use useState hook to allow data to load 
  only after the whole response is fetched from the backend.
  */
  useEffect(() => {
    setIsData(true);
    fetch("http://127.0.0.1:3002/product")
      .then((response) => response.json())
      .then((responseData) => {
        setListOfItems(responseData.data);
        setIsData(false);
      })
      /*page is re-rendered after state change and this creates an infinite loop here. 
    Therefore, need to use useEffect() to render it only one time. */
      .catch((err) => console.log(err));
  }, []);

  if (isData) {
    return <div>Data is Loading..</div>;
  }

  return (
    <div>
      <h1>I am on the Products page.</h1>
      <ProductList listOfItems={listOfItems} />
    </div>
  );
}
export default Products;
