import React, { useState } from "react";
import Cart from "../assets/cart.svg";
import Logo from "../assets/logo.png";
import { handleAdd } from "../utils/functions";

const Card = ({ products, cart, setCart, handleDetails }) => {
  //convertir precio a CLP
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <div onClick={(e) => handleDetails(e, products.id)} className="card">
      <div className="controls-container">
        <div
          onClick={() => handleAdd(products, cart, setCart)}
          className="controls verify"
        >
          <img src={Cart} alt="cart" width="25" className="verify" />
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
