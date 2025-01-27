import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const RegisterPage = () => {
  const { register } = useUser(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateData = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validación en el cliente
    if (!email || !password || !confirmPass) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPass) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Llamada a la API de registro
    try {
      await register({ email, password }); 
      setSuccess("¡Cuenta creada con éxito!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(error.message || "Error al crear la cuenta");
    }
  };

  return (
    <section className="bg-gray-50 dark:white pt-52 h-screen">
      <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-80 lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-neutral-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Crear una cuenta
            </h1>
            <form className="space-y-4" onSubmit={validateData}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ingrese su Correo
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  placeholder="name@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  placeholder="••••••••"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <button
                type="submit"
                className="w-full text-white bg-yellow-600 rounded-lg px-5 py-2.5"
              >
                Crear Cuenta
              </button>
              <p className="text-white pt-1">
                ¿Ya tienes cuenta?{" "}
                <Link className="text-yellow-500 hover:underline" to="/login">
                  Inicia Sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;