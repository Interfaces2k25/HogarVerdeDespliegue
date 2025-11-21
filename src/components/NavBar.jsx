import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-[rgba(212,218,178,1)] text-[rgba(71,79,35,1)] p-4 shadow-lg justify-center gap-8 text-center">
      <img
        className="w-30 h-auto flex flex-col items-center justify-center mx-auto"
        src="imagenes/LogoSinFondoHogarVerde.png"
        alt="Logo de HogarVerde"
      />

<div className="flex gap-8 text-lg flex-1 justify-center">
      <Link to="/" className="hover:underline">Inicio</Link>
      <Link to="/productlist" className="hover:underline">Listado de productos</Link>
      </div>
    </nav>
  );
}

export default NavBar;
