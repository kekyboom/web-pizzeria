import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //agregar al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, amount: item.amount + 1 }   
            : item
        );
      }
      return [...prevCart, { ...pizza, amount: 1 }];
    });
  };

  //Incrementar
  const increaseAmount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pickedPizza) =>
          pickedPizza.id === id ? { ...pickedPizza, amount: pickedPizza.amount +1 } : pickedPizza
      )
    );
  };

  //disminuir
  const decreaseAmount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      ).filter((item) => item.amount > 0)
    );
  };

  //calcular el total
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.amount, 0);

   // Método para enviar el carrito al backend

   const checkout = async (token) => {

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) {
        throw new Error("Error al realizar el pedido");
      }

      const data = await res.json();
      setCart([]); 
      return data;
    } catch (error) {
      console.error("Error en el checkout:", error.message);
      throw error;
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseAmount, decreaseAmount, calculateTotal, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;