import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// import { useState } from "react";
import Header from "./components/common/Header.jsx";
import Cart from "./components/common/Cart";
import Products from "./components/common/Products.jsx";
import Details from "./components/common/Details";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      const { data } = await axios.get(
        "https://60b9129080400f00177b619f.mockapi.io/api/v1/products"
      );
      const dataArray = Object.values(data);
      setProducts(dataArray);
    };
    apiData();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <Header></Header>
      <div>
        <Products products={products} />
        <Cart />
        <Details />
      </div>
    </div>
  );
}

export default App;
