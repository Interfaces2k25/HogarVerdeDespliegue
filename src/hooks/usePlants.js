import {useState, useEffect} from "react";
import { getPlantas } from "../services/plantService";

export const usePlants = () => {
    const [data, setData ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlantas = async () => {
            try {
                setLoading(true)
                const res = await getPlantas();
                setData(res);
            } catch{
                setError("Error al obtener las plantas");
            } finally {
                setLoading(false);
            }
        };
        fetchPlantas();
    }, []);

    return { data, loading, error };

}