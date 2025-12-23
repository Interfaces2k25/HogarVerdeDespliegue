/**
 * NavBar component for the application.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {boolean} props.isAuthenticated - Indicates if the user is authenticated.
 * @param {Function} props.setIsAuthenticated - Function to toggle the authentication state.
 * @returns {JSX.Element} The rendered NavBar component.
 */
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar({ isAuthenticated, setIsAuthenticated }) {
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
          <NavLink to="/admin" className="hover:underline" onClick={() => setOpen(false)}>Admin</NavLink>
        </nav>
      </div>

      {/* NavBar normal en pantallas medianas y grandes, en pequeñas que se esconda */}
      <nav className="justify-center flex-1 hidden gap-8 text-lg md:flex" aria-label="Barra de navegación">

        <div className="flex justify-center flex-1 gap-8 text-lg">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/productlist" className="hover:underline">Listado de productos</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </div>
      </nav>


      {/* Botón para simular iniciar/cerrar sesión */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAuthenticated(!isAuthenticated)}
          className="px-4 py-2 bg-[#474f23] text-white rounded hover:bg-[#323524]"
        >
          {isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
        </button>
      </div>

    </header>
  );
}

export default NavBar;
