const cartData = JSON.parse(localStorage.getItem("cart"));

//agregar al carrito
export const handleAdd = (prod,cart,setCart) => {
    const exist = cart.find((el) => el.id === prod.id);
    // exist ? console.log("existe") : console.log("no existe");
    
    const data = exist
      ? cart.map((el) =>
      el.id === prod.id ? { ...exist, qty: exist.qty + 1 } : el
      )
      :[...cart, { ...prod, qty: 1 }];
      setCart(data)

    localStorage.setItem("cart", JSON.stringify(data));
    console.log(exist,!!exist)
  };


  // - cantidad
export const handleSubstract = (prod,cart,setCart) => {
  const exist = cart.find((el) => el.id === prod.id);
  // exist ? console.log("existe") : console.log("no existe");

  const data = exist
    ? cart.map((el) =>
      el.id === prod.id ? { ...exist, qty: exist.qty - 1 } : el
    )      
    : [...cart, { ...prod, qty: 1 }];
    setCart(data)
  localStorage.setItem("cart", JSON.stringify(data));
};



//eliminar
export const handleDelete = (prod,cart,setCart) => {
  const exist = cart.find((el) => el.id === prod.id);
  // exist ? console.log("existe") : console.log("no existe");

  const data = exist && cart.filter(el => el.id !== prod.id)
  setCart(data)
  localStorage.setItem("cart", JSON.stringify(data));
};
