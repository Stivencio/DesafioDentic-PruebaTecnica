import React from "react";

import Card from "./Card";

const Products = ({ products }) => {
  return (
    <div className="row center align center block ">
      {!products.length ? (
        <div>
          <h1>No hay datos</h1>
        </div>
      ) : (
        products.map((el, idx) => <Card key={idx} products={el} />)
      )}
    </div>
  );
};

export default Products;
