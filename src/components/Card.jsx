import React from "react";
import Cart from "../assets/cart.svg";
import Logo from "../assets/logo.png";

const Card = ({ products, addItem }) => {
  //convertir precio a CLP
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <div className="card">
      <div className="controls-container">
        <div onClick={addItem} className="controls">
          <img src={Cart} alt="Cerveza" width="25" />
        </div>
      </div>
      <img src={Logo} alt={products.name} width="80%" height="auto" />
      <div className="container">
        <b>{products.name}</b>
        {products["units-in-pack"] <= 1 ? (
          <div>{products["units-in-pack"]} unidad</div>
        ) : (
          <div>{products["units-in-pack"]} pack</div>
        )}

        <div>{formatter.format(products.price)}</div>
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
