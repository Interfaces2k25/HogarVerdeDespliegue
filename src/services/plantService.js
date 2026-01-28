import axios from "axios";

const API_URL = 'http://localhost:3000/productos';

//Mapear producto desde API al formato usado en frontend
const mapProductoFromAPI = (p) => ({
    id: p._id,
    name: p.name,
    description: p.description,
    price: p.price,
    category: p.category,
    information: p.information,
    image: p.image,
  });

//POST crear planta
export const createPlanta = async (plantaData) => {
    try {
        const res = await axios.post(API_URL, plantaData);
        // return res.data;
        return mapProductoFromAPI(res.data.data ?? res.data);
    } catch (error) {
        console.error("Error al crear la planta:", error);
        throw new Error(
            error.response?.data?.message || "No se pudo crear la planta"
        );
    }
};

//GET todas las plantas
export const getPlantas = async () => {
    try{
        const res = await axios.get(API_URL);
        // return res.data;
        return res.data.data.map(mapProductoFromAPI);
    } catch (error){
        console.error("Error al obtener las plantas: ", error);
        throw new Error("No se pudieron obtener las plantas");
    }
}

//GET planta por id
export const getPlantaById = async (id) => {
    try{
        const res = await axios.get(`${API_URL}/${id}`);
        // return res.data;
        return mapProductoFromAPI(res.data.data);
    } catch (error){
        console.error("Error al obtener la planta con id ", id, error);
        throw new Error("No se pudo obtener la planta con id ", id)
    }
}

//DELETE planta por id
export const deletePlantaById = async (id) => {
    try{
        const res = await axios.delete(`${API_URL}/${id}`);
        // return res.data;
        return res.data.data.map(mapProductoFromAPI);
    } catch (error){
        console.log("Error al eliminar la planta con id ", id, error);
        throw new Error("No se pudo eliminar la planta con id ", id)
    }
}