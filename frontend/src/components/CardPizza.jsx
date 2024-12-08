import { LuPizza } from "react-icons/lu";
import { formatCurr } from "../utils/formatCurr";
import { FaShoppingCart } from "react-icons/fa";


function CardPizza ({pizza}) {
    return (
        <>
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden dark:bg-gray-50 w-80 h-max">
                {/* Imagen*/}
                <img className="w-full object-cover h-52" src={pizza.img} alt={pizza.name} />

                {/* Contenido*/}
                <div className="p-5 flex flex-col items-center text-center">

                    <h5 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-black capitalize">{pizza.name}</h5>
                    <hr className="border-t-2 border-gray w-full pb-2" />
                    <p className="text-black pb-3">Ingredientes:</p>

                    <div className="flex ">
                        <LuPizza className="text-black "/>
                        {/*<p className="pl-1 mb-3 text-sm text-gray-700 dark:text-gray-700 capitalize">{pizza.ingredients.join(", ")}</p>*/}
                        <ul><li key={pizza.id} className="capitalize">{pizza.ingredients.join(", ")}</li></ul>
                    </div>

                    <p className="mb-5 text-lg font-bold text-gray-900 dark:text-black mt-2">Precio: ${formatCurr(pizza.price)}</p>
                    <div className="flex gap-3">
                        
                        <button type="button" className="flex items-center px-6 py-2 text-sm font-medium text-black bg-yellow-600 rounded-lg hover:bg-yellow-400 focus:ring-2  dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600 transition">
                        <FaShoppingCart className="text-black mx-2"/>
                            Añadir
                        </button>
                        <button type="button" className="flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 dark:bg-neutral-800 dark:hover:bg-black transition">
                            Ver Más
                            <svg className="w-4 h-4 ml-2 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </>
)}

export default CardPizza