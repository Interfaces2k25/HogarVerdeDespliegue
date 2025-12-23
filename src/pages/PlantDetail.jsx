import { useParams } from "react-router-dom";
import products from "../data/products";
import PlantDetailGeneric from "../components/PlantDetailGeneric";

/**
 * PlantDetail component that displays the details of a specific plant.
 * It retrieves the plant ID from the URL parameters and finds the corresponding
 * plant from the products data.
 *
 * @returns {JSX.Element} The rendered PlantDetail component.
 */
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