import React, { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';


const PizzaContext = createContext();

export const SelectedPizzaProvider = ({ children }) => {
  const [selectedPizza, setSelectedPizza] = useState([]);
  const navigate = useNavigate();

  const selectedPizzaDetails = (id) => {
    setSelectedPizza(id);
    navigate(`/Pizza/${id}`)
  };

  return (
    <PizzaContext.Provider value={{selectedPizza, selectedPizzaDetails}}>
        {children}
    </PizzaContext.Provider>
  );

};
    

export const useSelectedPizza = () => useContext (PizzaContext);