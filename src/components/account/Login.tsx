import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import default_product_image from "@/assets/images/default_product_image.jpg";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simuliere Login-Logik
    if (email === "joseph.holonou@innovertec.com" && password === "P@ssw0rd12") {
      login(); // Erfolgreich eingeloggt
      setErrorMessage("");
      navigate("/dashboard"); // Weiterleiten zur Dashboard-Seite (oder einer anderen geschützten Seite)
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full h-screen bg-white shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/3 px-6 py-8 flex flex-col justify-center relative">
          <Link to="/" className="absolute top-6 left-6 text-lg font-bold text-blue-600 hover:text-blue-700">
            Boulangerie Express
          </Link>

          <h2 className="text-3xl font-bold text-gray-900 text-center mt-12">Connexion à votre compte</h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="mt-1 w-full px-4 py-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Adresse e-mail"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="mt-1 w-full px-4 py-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mot de passe"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-700">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Mot de passe oublié ?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
            {errorMessage && <p className="text-red-600 mt-2 text-center">{errorMessage}</p>}
          </form>
        </div>

        <div className="hidden lg:block w-2/3">
          <img src={default_product_image} alt="Login Illustration" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;                      