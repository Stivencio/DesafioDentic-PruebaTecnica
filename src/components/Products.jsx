import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Details from "./Details";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(null);

  const cartData = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(cartData || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData || []));
  }, [cartData]);

  //agregar al carrito
  // const handleAdd = (prod) => {
  //   const exist = cart.find((el) => el.id === prod.id);
  //   // exist ? console.log("existe") : console.log("no existe");
  //   exist
  //     ? setCart(
  //         cart.map((el) =>
  //           el.id === prod.id ? { ...exist, qty: exist.qty + 1 } : el
  //         )
  //       )
  //     : setCart([...cart, { ...prod, qty: 1 }]);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // };

  //detalles producto
  const handleDetails = (e, id) => {
    const a = e.target.classList.contains("verify");
    if (a) return;
    const prod = products.find((el) => el.id === id);
    setActive(prod);
  };

  //get api
  useEffect(() => {
    const apiData = async () => {
      const { data } = await axios.get(
        "https://60b9129080400f00177b619f.mockapi.io/api/v1/products"
      );
      const dataArray = Object.entries(data).map((el) => {
        return {
          id: el[0],
          ...el[1],
        };
      });
      setProducts(dataArray);
    };
    apiData();
  }, []);

  return (
    <div className="row center align center block ">
      {active ? (
        <Details
          active={active}
          setActive={setActive}
          cart={cart}
          setCart={setCart}
        />
      ) : !products.length ? (
        <div>
          <h1>No hay datos</h1>
        </div>
      ) : (
        products.map((el, idx) => (
          <Card
            key={idx}
            products={el}
            handleDetails={handleDetails}
            cart={cart}
            setCart={setCart}
          />
        ))
      )}
    </div>
  );
};

export default Products;
