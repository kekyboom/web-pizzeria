import React from 'react';
import { useUser } from '../context/UserContext';

function Profile () {
  const {email, logout} = useUser();

  const handleLogout = () => {
    logout();
    alert("Has cerrado sesión exitosamente.");
  };

  return (
    <div className="p-10 ">
      <p className="font-bold">Email</p>
      <p>{email}</p>
      <button to="/" onClick={handleLogout} className=" w-64 text-white bg-yellow-600 font-medium rounded-lg text-sm py-2.5 text-center mt-10">Cerrar sesión</button>
    </div>
  );
}

export default Profile;
