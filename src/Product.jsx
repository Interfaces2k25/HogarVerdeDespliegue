function Product(props) {
  const { image, name, price, description } = props;
  return (
    <article className="bg-white shadow-md rounded-2xl w-80 p-5 flex flex-col items-center">
      
      <figure className="w-full rounded-lg overflow-hidden bg-gray-100">
        <img className="w-full object-cover rounded-2xl" src={image} alt={name} />
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




