import React, { useState, useEffect } from "react";
import { LuPizza } from "react-icons/lu";
import { formatCurr } from "../utils/formatCurr";
import { FaShoppingCart } from "react-icons/fa";


function Pizza() {
  const [pizza, setPizza] = useState(null);

  // Cargar datos 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        console.error("Error al cargar la pizza:", err);
      }
    };

    getData();
  }, []);

  if (!pizza) {
    return (
      <div className="p-10 text-center">
        {pizza === null ? "Cargando pizza..." : "No se encontró la pizza."}
      </div>
    );
  }

  return (
    <div className="pt-20  flex justify-center">
      {/* Imagen */}
      <img
        className="border rounded-lg object-cover w-[70vh] h-[65vh] mx-10"
        src={pizza.img}
        alt={pizza.name}
      />

      {/* Contenido */}
      <div className="p-5 pt-12 flex flex-col  w-1/3">
        <p className="mb-3 text-5xl font-semibold text-gray-900 dark:text-black capitalize">
          {pizza.name}
        </p>
        <hr className="border-t-2 border-gray w-full pb-10" />
        <p className="text-black text-3xl pb-3 ">Ingredientes:</p>

        <div className="flex pb-10">
          <p className="pl-1 mb-3 text-lg text-gray-700 dark:text-gray-700 capitalize">
            {pizza.ingredients.join(", ")}
          </p>
        </div>
        <p className="pl-1 mb-3 text-lgtext-gray-700 dark:text-gray-700 capitalize">
            {pizza.desc}
          </p>

        <p className="mt-5 mb-12 text-xl font-bold text-gray-900 dark:text-black">
          Precio: {formatCurr(pizza.price)}
        </p>
          <button
            type="button"
            className="flex items-center px-8 py-3 text-2xl font-medium text-black bg-yellow-600 rounded-lg hover:bg-yellow-400 focus:ring-2  dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600 transition w-1/3">        
          <FaShoppingCart className="text-black mx-2"/>
            Añadir
          </button>

      </div>
    </div>
  );
}

export default Pizza;