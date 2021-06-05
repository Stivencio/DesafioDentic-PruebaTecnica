import React from "react";

import Logo from "../assets/logo.png";

const Details = () => {
  return (
    <div className="row center align center block ">
      <div className="container-right">
        <img src={Logo} alt="asd"></img>
        <h2>Descripción</h2>
      </div>
      <div className="container-left">
        <h1>Titulo</h1>
        <p>dsadas</p>
        <p>dsadasdas</p>
        <p>sadasda</p>
        <p>Agregar al carrito</p>
        <p>descripcion</p>
      </div>
    </div>
  );
};

export default Details;
