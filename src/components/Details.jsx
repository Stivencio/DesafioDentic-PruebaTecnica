import React from "react";
// import Logo from "../assets/logo.png";
import { handleAdd, formatter } from "../functions/functions";

const Details = ({ active: p, cart, setCart, setActive }) => {
  return (
    <>
      <div className="flex-column">
        <div onClick={() => setActive(null)} className="div-btn">
          Volver
        </div>
        <div className="card2">
          <img src={p.image} alt={p.name} />
          <div>
            <div className="div-end">
              <h2>{p.store}</h2>
            </div>
          </div>
          <h1>{p.name}</h1>
          <p className="price">{formatter.format(p.price)}</p>
          {p["units-in-pack"] <= 1 ? (
            <p>{p["units-in-pack"]} unidad</p>
          ) : (
            <p>{p["units-in-pack"]} pack</p>
          )}
          <p>{p.description}</p>
          <p>
            <button onClick={() => handleAdd(p, cart, setCart)}>
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
