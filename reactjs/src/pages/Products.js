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
      {listOfItems.map((item) => {
        return <li key={item.id}>{item.itemName}</li>;
      })}
    </div>
  );
}
export default Products;
