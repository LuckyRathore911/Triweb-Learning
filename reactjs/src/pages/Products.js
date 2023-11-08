import ProductList from "../components/products/ProductList";

function Products() {
  let listOfItems = [
    {
      id: "a",
      itemName: "Pen",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. \nIt is maintained by Meta and a community of individual developers and companies. \nReact can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    },
    {
      id: "b",
      itemName: "Pencil",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrX6sz4SCJWCavxPjUYoBjFFDNno5Cv6hf388vCq03rzDWKFAbsQayJDM3KethZFjoWQ",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. \nIt is maintained by Meta and a community of individual developers and companies. \nReact can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    },
    {
      id: "c",
      itemName: "Diary",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBg4axmBIE1hP8xgAeKoazJhfP8a0YSKasTmU48dLk6qcxIFC4nAr26ojmpaMRkdAL_c",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. \nIt is maintained by Meta and a community of individual developers and companies. \nReact can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
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
