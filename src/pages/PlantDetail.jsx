import { useNavigate, useParams } from "react-router-dom";
import { deletePlantaById } from "../services/plantService";
import { usePlant } from "../hooks/usePlant";
import PlantDetailGeneric from "../components/PlantDetailGeneric";

/**
 * PlantDetail component that displays the details of a specific plant.
 * It retrieves the plant ID from the URL parameters and finds the corresponding
 * plant from the products data.
 *
 * @returns {JSX.Element} The rendered PlantDetail component.
 */

function PlantDetail() {
  const { id } = useParams(); //Obtener el id de la url
  const navigate = useNavigate(); //Redirigir al usuario al eliminar el producto

  const { plant, loading, error } = usePlant(id)

  //Botón para eliminar el producto
  const handleDelete = async () => {  
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmDelete) return;
    
    try {
      await deletePlantaById(id);
      alert("Producto eliminado correctamente");
      navigate("/productlist");
    } catch (error) {
      alert("Error al eliminar el producto: ", error.message);
    }
  };


  if (loading) return <p className="p-4">Cargando producto...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;


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

      <button
        onClick={handleDelete}
        className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
      >
        Eliminar
      </button>

      <PlantDetailGeneric plant={plant} />
    </>
  );
}

export default PlantDetail;