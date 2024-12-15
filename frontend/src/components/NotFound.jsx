import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div className="flex items-center">
       <img src="./public/img/not-found.png" className="w-1/3 pt-20 ml-48 mr-10" alt="img"/>
       <div className="flex flex-col">
       <p className="text-4xl font-bold pb-5">¡Esta pizza no está en el menú!</p>
       <p className="text-xl">No pudimos encontrar lo que estabas buscando.<br/> Tal vez tomaste el atajo equivocado hacia el menú.</p>
       <Link to="/" className="mt-10 w-64 text-white bg-yellow-600 font-medium rounded-lg text-sm py-2.5 text-center">Volver al Inicio</Link>
       </div>
    </div>
  );
}

export default NotFound;
