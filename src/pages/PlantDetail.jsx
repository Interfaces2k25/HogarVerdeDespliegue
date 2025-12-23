import { useParams } from "react-router-dom";
import products from "../data/products";
import PlantDetailGeneric from "../components/PlantDetailGeneric";

function PlantDetail() {
  const { id } = useParams();
  const plant = products.find(p => p.id === parseInt(id));

  return (
    <>
      <button>
        <a
          href="/productlist"
          className="p-2 ml-4 text-black bg-white hover:underline rounded-2xl"
        >
          ← Volver a los productos
        </a>
      </button>

      <PlantDetailGeneric plant={plant} />
    </>
  );
}

export default PlantDetail;



// import { useParams } from 'react-router-dom';
// import products from "../data/products";
// import Bubble from '../components/Bubble';

// function PlantDetail() {
//   const { id } = useParams();

//   // Buscar la planta por ID
//   const plant = products.find(p => p.id === parseInt(id));

//   // Si no existe, mostrar mensaje
//   if (!plant) return <h1 className="mt-10 text-center">Producto no encontrado</h1>;

//   return (
//     <main className="max-w-5xl px-6 py-10 mx-auto">
      
//       <button>
//         <a href="/productlist" className="p-2 ml-4 text-black bg-white hover:underline rounded-2xl ">← Volver a los productos</a>
//       </button>
      
//       <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">

//         {/* Imagen */}
//         <img src={`/${plant.image}`} alt={plant.name} className="object-cover w-130 h-140 rounded-2xl" />

//         {/* Contenedor que ponga toda la info a la derecha de la foto */}
//         <div className="flex-1 text-left">
//           {/* Nombre */}
//           <h1 className="text-4xl font-bold mb-6 text-[rgba(71,79,35,1)]">{plant.name}</h1>

//           {/* Info */}
//           <section className="space-y-3 text-lg">

//             <p>{plant.description}</p>
//             <p><strong>{plant.price}</strong></p>
//             <Bubble>{plant.information}</Bubble>
//           </section>
//         </div>
//       </div>
//     </main>

//   );
// }

// export default PlantDetail;
