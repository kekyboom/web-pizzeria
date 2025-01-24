import { formatCurr } from "../utils/formatCurr";
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { useUser } from "../context/UserContext";


function Cart () {
  const { cart, increaseAmount, decreaseAmount, calculateTotal } = useContext(CartContext);
  const {token} = useUser();

  return (
    <div className="mb-32 overflow-hidden">
      <p  className="mx-20 mt-10 font-semibold text-2xl ">Detalles del Pedido:</p>

      {

      cart.map((pizza) => (
        <div  key={pizza.id}>
          <div className="flex items-center px-20 py-5 drop-shadow-md w-fit border-b-2">
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
        <button disabled={token} className={`"ml-32 text-center content-center w-32 h-10 text-white rounded-md drop-shadow-md" ${
          token ? "bg-neutral-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed" }`}>PAGAR</button>
      </div>
    </div>
  )
}

export default Cart
