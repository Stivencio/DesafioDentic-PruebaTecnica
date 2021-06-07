import React, { useState } from "react";
import {
  handleAdd,
  handleSubstract,
  handleDelete,
} from "../functions/functions";

const Cart = () => {
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(cartData);
  // console.log(cart);
  // cart.forEach((el) => console.log(el.store));

  //categories
  const categories = [];
  cart.forEach((category) => {
    if (!categories.find((cat) => cat.store === category.store)) {
      const { store } = category;
      categories.push({ store });
    }
  });
  // console.log(categories);
  // categories.forEach((el) => console.log(el.store));
  const cartFiltered = categories.map((cat) => {
    const filtered = cart.filter((prod) => cat.store === prod.store);
    return { category: cat.store, list: filtered };
  });

  // const xd = cartFiltered.map((el) => el.list.map((el) => el));
  // console.log(xd);

  return (
    <>
      <div>
        <h1>Cart items</h1>
      </div>

      <div className="block">
        {cart != null && cart.length >= 1 ? (
          <>
            {cartFiltered.map((el, idx) => (
              <div key={idx}>
                <h1>{el.category}</h1>
                {el.list.map((el) => (
                  <div key={el.id} className="cart">
                    <div>
                      <h2>{el.name}</h2>
                    </div>
                    <div>
                      <button onClick={() => handleAdd(el, cart, setCart)}>
                        +
                      </button>
                      <p>{el.qty}</p>
                      <button
                        onClick={() => handleSubstract(el, cart, setCart)}
                        disabled={el.qty === 1 && true}
                      >
                        -
                      </button>
                      <button onClick={() => handleDelete(el, cart, setCart)}>
                        delete
                      </button>
                      <h3>{el.price}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <hr />
            <div className="row evenly">
              <h2>Subtotal</h2>
              <h3>10.000</h3>
            </div>
            <hr />
            <div className="row evenly">
              <h2>Total</h2>
              <h3>{cart.reduce((acc, el) => acc + el.price * el.qty, 0)}</h3>
              <button>PAGAR</button>
            </div>
          </>
        ) : (
          <h2>cart is empty</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
