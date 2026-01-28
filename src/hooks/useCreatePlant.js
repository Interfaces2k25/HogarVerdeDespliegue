import { useState } from "react";
import { createPlanta } from "../services/plantService";

export const useCreatePlant = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addPlant = async (plantData) => {
        try{
            setLoading(true);
            setError(null);
            await createPlanta(plantData);
            return true;
        } catch (err) {
            setError("Error al crear la planta: ", err);
            return false;
        } finally {
            setLoading(false)
        }
    };

    return { addPlant, loading, error };
}