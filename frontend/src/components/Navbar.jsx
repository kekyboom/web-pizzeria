import { FaShoppingCart } from "react-icons/fa";
import { formatCurr } from "../utils/formatCurr";
import { FaUserEdit } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { IoLogInSharp } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar () {

    const {token, logout } = useUser();
    const { calculateTotal } = useContext(CartContext);
    
    return (

        <>
            <nav className="sticky top-0 z-50 bg-white border-gray-200 dark:bg-neutral-900">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="text-2xl font-bold text-white text-center">Pizzería Mamma Mia</Link>
        
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <div className="flex items-center ">
                    <FaShoppingCart className="dark:text-white"/>
                    <Link to="/cart" className="block md:px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Total: ${formatCurr(calculateTotal())}</Link>
                </div>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            
                <div className="flex flex-col font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-neutral-900 dark:border-gray-700">
                    
                    { /*HOME*/ }
                    
                    <div className="flex items-center ">
                        <GiFullPizza className="text-white pr-1 text-xl md:dark:text-yellow-500 " />
                        <Link to="/"  className="text-yellow-500 no-underline" >
                            Home
                        </Link>
                    </div>
                    
                    <div>
                        { token ? (
                        <div className="flex">

                           { /*Profile*/ }
                           <Link to="/profile" className="flex items-center text-white pr-7 hover:text-yellow-500 no-underline">
                                <FaClipboardUser />
                                Perfil
                            </Link>
                            

                            { /*Logout*/ }
                            <div className="flex items-center">
                                <RiLogoutBoxFill className="text-white pr-1 text-lg" />
                                <button onClick={() => logout()} className="text-white pr-7 hover:text-yellow-500">Logout</button>
                            </div>
                        </div>
                        ) : (
                        
                        <div className="flex">

                            { /*Login*/ }
                           <div className="flex items-center">
                                <IoLogInSharp className="text-white pr-1 text-xl" />
                                <Link to="/login" className="text-white pr-7 hover:text-yellow-500 no-underline">
                                    Login
                                </Link>
                            </div>

                            { /*Register*/ }
                            <div className="flex items-center">
                                <FaUserEdit className="text-white pr-1 text-xl" />
                                <Link to="/register" className="text-white pr-7 hover:text-yellow-500 no-underline">
                                    Registro
                                </Link>
                            </div> 
                        </div>
                        )
                        }
                    </div>
                </div>
                
            </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar