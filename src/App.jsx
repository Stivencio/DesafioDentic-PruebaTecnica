import React from "react";
import "./App.css";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />

      {/* <Header></Header>
      <div>
        <Products products={products} addItem={addItem} />
        <Cart cartItems={cartItems} addItem={addItem} />
        <Details />
      </div> */}
    </div>
  );
}

export default App;
