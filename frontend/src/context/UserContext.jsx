
import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [userProfile, setUserProfile] = useState(null); 
  

  // Método para login
  const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        throw new Error("Datos Incorrectos");
      }

      const data = await res.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      throw error;
    }
  };

  // Método para registro
  const register = async (userData) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        throw new Error("Error al registrarse");
      }

      const data = await res.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      throw error;
    }
  };

  // Método para logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    setUserProfile(null);
  };

   // Método para obtener perfil del usuario
   const getUserProfile = async () => {
    try {
      if (!token) {
        throw new Error("Usuario no autenticado");
      }

      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Error al obtener el perfil del usuario");
      }
    // Actualizar el estado con datos del perfil
      const data = await res.json();
      setUserProfile(data); 
    } catch (error) {
      throw error;
    }
  };


  return (
    <UserContext.Provider value={{ token, email, login, register, logout, userProfile, getUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const ProtectedRoutes = ({ children }) => {
  const { token } = useUser();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export const PublicRoutes = ({ children }) => {
  const { token } = useUser();

  if (token) {
    return <Navigate to="/" />;
  }
  return children;
};

export const useUser = () => useContext(UserContext);
export default ProtectedRoutes;