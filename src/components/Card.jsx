import { Link } from "react-router-dom";
// Link para renvolver el card, navega entre rutas sin recargar la página

/**
 * Card component that displays an image, name, price, and navigates to a specified route.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.image - The URL of the image to display.
 * @param {string} props.name - The name of the item.
 * @param {string} props.price - The price of the item.
 * @param {string} props.to - The route to navigate to when the card is clicked.
 * @param {React.ReactNode} props.children - Optional children to display within the card.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
function Card(props) {
    const { image, name, price, to } = props;
    return (
        <article
            className="flex flex-col items-start gap-3 p-4 rounded-lg">

            {/* Aquí el tabIndex para que me ocupe el tamaño solo de la tarjeta, y no de todo el article */}
            <Link
                to={to} //Ruta de destino donde navega al hacer click
                tabIndex={0} //Accesibilidad por tab
                aria-label={`Abrir detalle de ${name}`}
                className="bg-[var(--color-secondary)] shadow-md overflow-hidden flex flex-col items-center text-left 
            hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300 w-80 p-5 rounded-2xl">

                <figure className="w-full overflow-hidden bg-gray-100 rounded-lg">

                    <img className="object-cover w-80 h-90 rounded-2xl " src={image} alt={name} />

                </figure>
                <div>
                    <h2 className="pt-3 mb-2 text-xl font-semibold text-gray-800">{name}</h2>
                    <p>{price} €</p>
                    <p>{props.children}</p>
                </div>
            </Link>
        </article>
    )

}

export default Card;