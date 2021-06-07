import React, { useState } from "react";
import {
  handleAdd,
  handleSubstract,
  handleDelete,
  formatter,
} from "../functions/functions";
import Add from "../assets/add.svg";
import Sub from "../assets/sub.svg";
import Delete from "../assets/delete.svg";

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

  //subtotal
  // const subtotal = cartFiltered.map((el) => el.list);
  // console.log(subtotal);
  // console.log(subtotal.map((el) => el));

  // const xd = cartFiltered.map((el) => el.list.map((el) => el));
  // console.log(xd);

  return (
    <>
      <div>
        <h1>Tu carrito</h1>
      </div>
      <div className="table-center">
        <div className="table">
          {cart != null && cart.length >= 1 ? (
            <>
              {cartFiltered.map((el, idx) => (
                <div key={idx}>
                  <div className="table store">
                    <h2>{el.category}</h2>
                  </div>
                  {el.list.map((el) => (
                    <div key={el.id} className="cart">
                      {/* Tabla productos */}
                      <div className="table container">
                        <div className="divTable">
                          <div className="divTableBody">
                            <div className="divTableRow">
                              <div className="divTableCell">{el.name}</div>
                              <div className="divTableCell">
                                <button
                                  onClick={() =>
                                    handleSubstract(el, cart, setCart)
                                  }
                                  disabled={el.qty === 1 && true}
                                >
                                  <img
                                    src={Sub}
                                    alt="Substract"
                                    width="20px"
                                  ></img>{" "}
                                </button>
                              </div>
                              <div className="divTableCell">{el.qty}</div>
                              <div className="divTableCell">
                                <button
                                  onClick={() => handleAdd(el, cart, setCart)}
                                >
                                  <img src={Add} alt="Add" width="20px"></img>{" "}
                                </button>
                              </div>
                              <div className="divTableCell">
                                <button
                                  onClick={() =>
                                    handleDelete(el, cart, setCart)
                                  }
                                >
                                  <img
                                    src={Delete}
                                    alt="Delete"
                                    width="20px"
                                  ></img>{" "}
                                </button>
                              </div>
                              <div className="divTableCell">
                                {formatter.format(el.price)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tabla productos*/}
                    </div>
                  ))}
                  <div className="table subtotal">
                    <div>
                      <h4>Subtotal</h4>
                    </div>
                    <div>
                      <h4>
                        {formatter.format(
                          cart.reduce((acc, el) => acc + el.price * el.qty, 0)
                        )}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}

              <div className="table total">
                <div>
                  <h2>Total a Pagar</h2>
                </div>
                <div>
                  <h2>
                    {formatter.format(
                      cart.reduce((acc, el) => acc + el.price * el.qty, 0)
                    )}
                  </h2>
                </div>
                <div>
                  <button className="table-btn">PAGAR</button>
                </div>
              </div>
            </>
          ) : (
            <h2>El carrito está vacío</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
