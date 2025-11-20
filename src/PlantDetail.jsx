import { useParams } from 'react-router-dom';
import products from "../data/products";

function PlantDetail() {
  const { id } = useParams();

  // Buscar la planta por ID
  const plant = products.find(p => p.id === parseInt(id));

  // Si no existe, mostrar mensaje
  if (!plant) return <h1 className="text-center mt-10">Producto no encontrado</h1>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">
        Detalle del Producto
      </h1>

      <main className="w-full mx-auto px-4 text-center">

        {/* Nombre */}
        <h1 className="text-4xl font-bold mb-6">{plant.name}</h1>

        {/* Imagen */}
        <img
          src={`/${plant.image}`}
          alt={plant.name}
          className="w-80 h-90 object-cover rounded-2xl mb-6 mx-auto"
        />

        {/* Info */}
        <section className="space-y-3 text-lg text-center">
          <p><strong>Precio:</strong> {plant.price}</p>
          <p><strong>Descripción:</strong> {plant.description}</p>
          <p><strong>Categoría:</strong> {plant.category}</p>
        </section>

      </main>
    </div>
  );
}

export default PlantDetail;
