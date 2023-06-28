import React, { useEffect } from "react";
export function HomePage() {
  useEffect(() => {
    // Al montar, añadir una clase al cuerpo
    document.body.classList.add("home-page");
    // Limpieza después del desmontaje
    return () => {
      // Al desmontar, quitar la clase del cuerpo
      document.body.classList.remove("home-page");
    };
  }, []); // Dependencias vacías significan que este efecto solo se ejecuta una vez al montar y desmontar
  // Renderizar el contenido de la página de inicio
  return (
    <div className="homepage-content">
      <h1>
        Comunidad de recomendaciones de ofertas, lugares o viajes solo para ti
      </h1>
      <h2>Si te gusta viajar...</h2>
      <div className="homepage-content__paragraphs">
        <p>Aquí encontrarás lo que estás buscando</p>
        <p>Prepara tu viaje</p>
      </div>
    </div>
  );
}