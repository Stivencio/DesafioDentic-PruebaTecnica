import React from "react";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.svg";

const Header = () => {
  return (
    <header className="row evenly align center block ">
      <a href="#/store">
        <h1>Tienda</h1>
      </a>
      <a href="#/store">
        {" "}
        <img src={Logo} alt="" width="150"></img>{" "}
      </a>
      <a href="#/cart">
        {" "}
        <img src={Cart} alt="" width=""></img>{" "}
      </a>
    </header>
  );
};

export default Header;
