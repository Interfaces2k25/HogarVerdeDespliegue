import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false)

  return (

    <header className="bg-[rgba(212,218,178,1)] text-[rgba(71,79,35,1)] p-4 shadow-lg">

      {/* Barra superior con logo + botón */}
      <div className="relative flex items-center justify-between">
        <img className="h-24 mx-auto" src="imagenes/LogoSinFondoHogarVerde.png" alt="Logo de HogarVerde" />


        {/* Botón hamburguesa que sea invisible en pantallas medianas y grandes */}
        <button onClick={() => setOpen(!open)} className="text-3xl md:hidden" aria-lablel="Menú hamburguesa"
          aria-expanded={open} aria-controls="menu-movil">☰</button>


        {/* Desplegable del menú hamburguesa */}
        <nav id="menu-movil" className={`absolute top-16 left-0 w-full bg-white flex flex-col p-4 gap-4 md:hidden 
      transition-all ${open ? "block" : "hidden"}`} aria-label="Menú para móvil">
          <NavLink to="/" className="hover:underline" onClick={() => setOpen(false)} >Inicio</NavLink>
          <NavLink to="/productlist" className="hover:underline" onClick={() => setOpen(false)}>Lista de plantas</NavLink>
        </nav>
      </div>

      {/* NavBar normal en pantallas medianas y grandes, en pequeñas que se esconda */}
      <nav className="hidden md:flex gap-8 text-lg flex-1 justify-center" aria-label="Barra de navegación">

        <div className="flex gap-8 text-lg flex-1 justify-center">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/productlist" className="hover:underline">Listado de productos</Link>
        </div>
      </nav>


    </header>
  );
}

export default NavBar;
