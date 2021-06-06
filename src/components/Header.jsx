import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import Cart from "../assets/cart.svg";

const Header = () => {
  return (
    <header className="row evenly align center block ">
      <Link to="/">
        <h1>Tienda</h1>
      </Link>
      <Link to="/">
        {" "}
        <img src={Logo} alt="" width="150"></img>{" "}
      </Link>
      <Link to="/cart">
        {" "}
        <img src={Cart} alt="" width=""></img>{" "}
      </Link>
    </header>
  );
};

export default Header;
