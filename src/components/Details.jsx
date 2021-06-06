import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { handleAdd } from "../utils/functions";

const Details = ({ active: p, cart, setCart, setActive }) => {
  return (
    <div className="row center align center block ">
      <button onClick={() => setActive(null)}>volver</button>
      <div className="container-right">
        <img src={Logo} alt="asdas"></img>
        <h2>Descripción</h2>
      </div>
      <div className="container-left">
        <h1>{p.name}</h1>
        <p>{p.store}</p>
        <p>{p["units-in-pack"]}</p>
        <p>{p.price}</p>
        <div onClick={() => handleAdd(p, cart, setCart)} className="controls">
          Agregar al carrito
        </div>
        <p>{p.description}</p>
      </div>
    </div>
  );
};

export default Details;
