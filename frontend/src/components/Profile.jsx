import React from 'react';

function Profile () {
  return (
    <div className="p-10 ">
      <p className="font-bold">Email</p>
      <p>usuario@gmail.com</p>
      <button to="/" className=" w-64 text-white bg-yellow-600 font-medium rounded-lg text-sm py-2.5 text-center mt-10">Cerrar sesión</button>
    </div>
  );
}

export default Profile;
