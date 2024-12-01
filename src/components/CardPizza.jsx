import { LuPizza } from "react-icons/lu";
import { formatCurr } from "../utils/formatCurr"

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
                        <ul><li className="capitalize">{pizza.ingredients.join(", ")}</li></ul>
                    </div>

                    <p className="mb-5 text-lg font-bold text-gray-900 dark:text-black">Precio: ${formatCurr(pizza.price)}</p>
                    <div className="flex gap-3">
                        
                        <button type="button" className="flex items-center px-6 py-2 text-sm font-medium text-black bg-yellow-600 rounded-lg hover:bg-yellow-400 focus:ring-2  dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600 transition">
                            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0- 184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
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