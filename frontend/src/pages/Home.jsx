import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
import { useState, useEffect } from "react"


function Home() {

  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/pizzas");
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }};
    useEffect(() => {
      getData();
    }, []);

  return (
    <div>
        <Header/>
        <div className="flex flex-col items-center min-w-full mb-32">
          <h1 className="text-2xl font-bold text-center mb-8">Menú de Pizzas</h1>
          <div className="flex grid grid-cols-1 md:grid-cols-2 sm:grid-col-1 lg:grid-cols-3 gap-10">
            {pizzas.map((pizza) => (
              <CardPizza key={pizza.id} pizza={pizza}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home
