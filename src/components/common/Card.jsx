import React from "react";
import Cart from "../../assets/cart.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="controls">
        <img src={Cart} alt="Cerveza" width="20" />
      </div>
      <img
        src="https://www.tamango.cl/img/uploads/1tlemkpmj.jpeg"
        alt="Cerveza"
        width="80%"
        height="auto"
      />
      <div className="container">
        <h4>
          <b>«Microdosis» Cerveza lúpulada</b>
        </h4>
        <p>6 pack</p>
        <p>$15.000</p>
      </div>
      <div className="footer align center">
        <p>Envío rápido</p>
      </div>
    </div>
  );
};

export default Card;
