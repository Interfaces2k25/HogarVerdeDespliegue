import {useState, useEffect} from "react";
import { getPlantaById } from "../services/plantService";

export const usePlant = (id) => {
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [plant, setPlant] = useState(null)


    useEffect(() => {
        //Función para obtener el producto desde la api
        const fetchPlant = async () => {
          try {
            setLoading(true);
            const data = await getPlantaById(id);
            setPlant(data);
          } catch {
            setError("Producto no encontrado");
          } finally {
            setLoading(false);
          }
        };
        fetchPlant();
        
      }, [id]); //Ponemos [id] porque puede cambiar si navegamos a otro producto, 
      //[] cuando no depende de nada externo
      return { plant, error, loading }
}
