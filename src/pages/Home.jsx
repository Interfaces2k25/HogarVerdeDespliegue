/**
 * Home component that renders the welcome message and a brief description.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
function Home(){
    return(
        <div>
            <h1 className="mt-10 text-4xl font-bold text-center">Bienvenido a la página de inicio</h1>
            <p className="mt-4 text-center">Explora nuestro catálogo de plantas.</p>
        </div>
    )
}

export default Home;