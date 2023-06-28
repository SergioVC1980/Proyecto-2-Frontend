import React, { useState } from "react";
import { logInUserService } from "../services";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const LoginPage = () => {
  const { login, isAuthenticated, setUserid } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await logInUserService({ email, password });
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.user.id);
        setUserid(response.user.id);
        login();
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <section>
      <h1>Login</h1>
      {isAuthenticated ? (
        <div className="welcome-container">
          <p className="welcome-message">¡Bienvenidos a Linkilandia!</p>
          <p>Siempre es un buen momento para planificar tu próximo viaje.</p>
          <p className="question-paragraph">¿Por qué elegirnos?</p>
          <p>
            En nuestra comunidad amamos descubrir nuevos destinos, paisajes en
            los que puede disfrutar todo el mundo, viajes adaptados para todas
            las edades.
          </p>
          <p className="question-paragraph">¿Como podéis inspiraros y ayudar a otros viajeros?</p>
          <p className="last-paragraph">
            Aquí podréis añadir todos los enlaces que os parezca interesante o
            que puedan servir de inspiración para otros viajeros y ayudarlos a
            encontrar nuevos destinos, ofertas de vuelos, viajes, escapadas de
            fin de semana o viajes con niños...Por cada enlace que se añada,
            ayudarás a otro viajero como tú y al mismo tiempo podrás encontrar
            nuevas aventuras viajeras.
          </p>
        </div>
      ) : (
        <form onSubmit={handleForm}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="pass">Password</label>
            <div style={{display: "flex", alignItems: "center"}}>
              <input
                type={showPassword ? "text" : "password"}
                name="pass"
                id="pass"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </fieldset>
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </section>
  );
};

export default LoginPage;

