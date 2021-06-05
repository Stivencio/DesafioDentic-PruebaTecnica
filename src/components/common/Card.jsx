import React from "react";
import Cart from "../../assets/cart.svg";
import Logo from "../../assets/logo.png";

const Card = ({ products }) => {
  return (
    <div className="card">
      <div className="controls-container">
        <div className="controls">
          <img src={Cart} alt="Cerveza" width="25" />
        </div>
      </div>
      <img src={Logo} alt={products.name} width="80%" height="auto" />
      <div className="container">
        <b>{products.name}</b>
        <div>6 pack</div>
        <div>${products.price}</div>
      </div>
      {products["fast-shipping"] ? (
        <div className="footer">
          <p>Envío rápido</p>
        </div>
      ) : (
        <div className="footer-a"></div>
      )}
    </div>
  );
};

export default Card;
