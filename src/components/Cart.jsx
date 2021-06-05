import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="row evenly align center block ">
      <h1>Cart items</h1>
      {!cartItems.length ? <h2>cart is empty</h2> : <h2>cart exist</h2>}
    </div>
  );
};

export default Cart;
