import { pizzas } from "../data/pizzas"
import { formatCurr } from "../utils/formatCurr";
import { useState } from "react";


function Cart () {
  const initialCart = pizzas.slice(0, 3).map((pizza) => ({
    ...pizza,
    amount: 1,
  }));

  //Incrementar
  const [cart, setCart] = useState(initialCart); 

  const increaseAmount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pickedPizza) =>
          pickedPizza.id === id ? { ...pickedPizza, amount: pickedPizza.amount +1 } : pickedPizza
      )
    );
  };

  //Disminuir & filtrar
  const decreaseAmount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pickedPizza) =>
          pickedPizza.id === id && pickedPizza.amount > 0 ? { ...pickedPizza, amount: pickedPizza.amount -1 } : pickedPizza 
      ).filter((pickedPizza) => pickedPizza.amount > 0)
    );
  };

  //Suma total del carrito 
  const calculateTotal = () => {
    return cart.reduce((total, pickedPizza) => total + pickedPizza.price * pickedPizza.amount, 0)
  }
    
  return (
    <div>
      <p  className="mx-20 mt-10 font-semibold text-2xl ">Detalles del Pedido:</p>

      {

      cart.map((pizza) => (
        <div >
          <div className="flex items-center px-20 py-5 drop-shadow-md w-fit border-b-2" key={pizza.id}>
            <img  src={pizza.img} alt={pizza.name} className="size-32 rounded-lg "/>
            <p className="px-3 w-40 capitalize font-semibold text-xl">{pizza.name}</p>
              <div className="flex items-center px-2 space-x-2 space-y-2 ">
                <p className="w-32 ">{formatCurr(pizza.price)}</p>
                <button className="bg-yellow-500 w-10 h-10 rounded-md font-bold text-xl text-red-50" onClick={() => decreaseAmount(pizza.id)}>-</button>
                <p className="w-5 text-center">{pizza.amount}</p>
                <button className="bg-neutral-700 w-10 h-10 rounded-md font-bold text-xl text-red-50" onClick={() => increaseAmount(pizza.id)} >+</button>
              </div>    
          </div>
        </div>
      ))
    }
      <div className="mx-20 my-10 flex items-center ">
        <p className="font-semibold text-xl w-72">TOTAL: ${formatCurr(calculateTotal())}</p>
        <button className="ml-32 text-center content-center w-32 h-10 text-white bg-neutral-700 rounded-md drop-shadow-md">PAGAR</button>
      </div>
    </div>
  )
}

export default Cart