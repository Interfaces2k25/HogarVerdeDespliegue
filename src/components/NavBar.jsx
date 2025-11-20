import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-[rgba(212,218,178,1)] text-black p-4 shadow-lg flex justify-center gap-8">
      <img
        className="w-40 h-auto flex flex-col items-center justify-center mx-auto"
        src="imagenes/LogoSinFondoHogarVerde.png"
        alt="Logo de HogarVerde"
      />
      <Link to="/">Inicio</Link>
    </nav>
  );
}

export default NavBar;
