

/**
 * Footer component that displays the footer section of the application.
 * It includes navigation links and a logo.
 *
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer() {
  return (
    <footer className="w-full bg-[#D4DAB2] py-6">
      <div className="flex flex-col items-center max-w-6xl gap-6 px-6 mx-auto md:flex-row md:justify-between">

        {/* Sección de enlaces */}
        <div className="flex flex-col gap-48 text-sm font-medium text-center md:flex-row md:text-left">
          <a href="#" className="hover:underline font-bold text-[rgba(71,79,35,1)]">Sobre nosotros</a>
          <a href="#" className="hover:underline font-bold text-[rgba(71,79,35,1)]">Contacto</a>
          <a href="#" className="hover:underline font-bold text-[rgba(71,79,35,1)]">Preguntas frecuentes</a>
          <a href="#" className="hover:underline font-bold text-[rgba(71,79,35,1)]">Ayuda</a>
        </div>

        {/* Logo */}
        <img
          src="imagenes/LogoSinFondoHogarVerde.png"
          alt="Logo Hogar Verde"
          className="w-20"
        />
      </div>
    </footer>
  );
}

export default Footer;