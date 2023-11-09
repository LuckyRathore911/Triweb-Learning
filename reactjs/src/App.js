import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import FavouriteItems from "./pages/FavouriteItems";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/add" element={<AddProduct />}></Route>
        <Route path="/products/favourite" element={<FavouriteItems />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
