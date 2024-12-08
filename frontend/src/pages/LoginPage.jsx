import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const validateData = (e) => {
        e.preventDefault()

        setError("");

            if (email === "") {
                setError("Debes ingresar tu correo");
                return;
            }  
      
            if (password.length < 6) {
                setError("La contraseña debe tener al menos 6 caracteres");
                return;
            }  
        
          alert("¡Has iniciado sesión con exito!");
        }

  return (
    
    <section className="bg-gray-50 dark:white pt-52 h-screen">

        <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-80 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-neutral-800 dark:border-gray-700">

                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Iniciar Sesión
                    </h1>

                    <form className="space-y-4 md:space-y-6" onSubmit={validateData}>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese su Correo</label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@mail.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        </div>
                        
                            {error && (
                            <p className="text-red-500 text-sm">{error}</p>)}


                        <button type="submit" className="w-full text-white bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Iniciar Sesión</button>

                    </form>
                </div>
            </div>
        </div>

    </section>
    
  )
}

export default LoginPage


