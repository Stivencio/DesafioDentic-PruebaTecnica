import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// import { useState } from "react";
import Header from "./components/Header.jsx";
import Cart from "./components/Cart";
import Products from "./components/Products.jsx";
import Details from "./components/Details";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCart] = useState([]);

  //get api
  useEffect(() => {
    const apiData = async () => {
      const { data } = await axios.get(
        "https://60b9129080400f00177b619f.mockapi.io/api/v1/products"
      );
      const dataArray = Object.values(data);
      setProducts(dataArray, { hola: "xd" });
    };
    apiData();
  }, []);

  // cart add
  const addItem = (product) => {
    const exist = cartItems.find((el) => el.id === product.id);
    exist
      ? setCart(
          cartItems.map((el) =>
            el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
          )
        )
      : setCart([...cartItems, { ...product, qty: 1 }]);
  };

  return (
    <div className="App">
      <Header></Header>
      <div>
        <Products products={products} addItem={addItem} />
        <Cart cartItems={cartItems} addItem={addItem} />
        <Details />
      </div>
    </div>
  );
}

export default App;
