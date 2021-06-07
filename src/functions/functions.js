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
  };


  // restar al carrito
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


//Cambiar a CLP
export const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});