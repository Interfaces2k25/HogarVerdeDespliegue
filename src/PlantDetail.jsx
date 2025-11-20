import { useParams } from 'react-router-dom';
import products from "./data/products";
import Bubble from './components/Bubble';

function PlantDetail() {
  const { id } = useParams();

  // Buscar la planta por ID
  const plant = products.find(p => p.id === parseInt(id));

  // Si no existe, mostrar mensaje
  if (!plant) return <h1 className="text-center mt-10">Producto no encontrado</h1>;

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Imagen */}
        <img src={`/${plant.image}`} alt={plant.name} className="w-130 h-140 object-cover rounded-2xl" />

        {/* Contenedor que ponga toda la info a la derecha de la foto */}
        <div className="flex-1 text-left">
          {/* Nombre */}
          <h1 className="text-4xl font-bold mb-6 text-[rgba(71,79,35,1)]">{plant.name}</h1>

          {/* Info */}
          <section className="space-y-3 text-lg">

            <p>{plant.description}</p>
            <p><strong>{plant.price}</strong></p>
            <Bubble>{plant.information}</Bubble>
          </section>
        </div>
      </div>
    </main>

  );
}

export default PlantDetail;
