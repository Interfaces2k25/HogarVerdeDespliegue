/**
 * Product component displays product information including image, name, price, and description.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.image - The URL of the product image.
 * @param {string} props.name - The name of the product.
 * @param {string} props.price - The price of the product.
 * @param {string} props.description - A brief description of the product.
 * @returns {JSX.Element} The rendered product component.
 */
function Product(props) {
  const { image, name, price, description } = props;
  return (
    <article className="flex flex-col items-center p-5 bg-white shadow-md rounded-2xl w-80">
      
      <figure className="w-full overflow-hidden bg-gray-100 rounded-lg">
        <img className="object-cover w-full rounded-2xl" src={image} alt={name} />
      </figure>

      <div className="w-full mt-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="font-medium">{price}</p>
        <p className="mt-2">{description}</p>
      </div>

    </article>
  );
}

 export default Product




