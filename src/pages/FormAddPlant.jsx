import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePlant } from "../hooks/useCreatePlant";

/**
 * FormAddPlant component for adding a new plant.
 * 
 * This component manages the state of the form data and handles
 * form submission with validation for required fields.
 * 
 * @component
 * @returns {JSX.Element} The rendered form for adding a plant.
 */

const initialPlantData = {
    name: "",
    price: "",
    description: "",
    category: "",
    image: "", // Base64
    information: "",
};

const validatePlant = (data) => {
    const errors = {};

    if (!data.name.trim()) errors.name = "El nombre es obligatorio.";
    if (data.price === "" || Number(data.price) < 0)
        errors.price = "El precio debe ser mayor o igual a 0.";
    if (!data.description.trim())
        errors.description = "La descripción es obligatoria.";
    if (!data.category)
        errors.category = "Selecciona una categoría.";
    if (!data.image)
        errors.image = "Debes subir una imagen.";
    if (!data.information.trim())
        errors.information = "La información es obligatoria.";

    return errors;
};



function FormAddPlant() {
    const [plantData, setPlantData] = useState(initialPlantData);
    const [plantErrors, setPlantErrors] = useState({});

    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    // Hook personalizado
    const { addPlant, loading, error } = useCreatePlant();

    // Estado de errores

    const handlePlantChange = (e) => {
        const { id, value } = e.target;

        setPlantData((prev) => ({ ...prev, [id]: value }));

        if (plantErrors[id]) {
            setPlantErrors((prev) => ({ ...prev, [id]: "" }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setPlantData((prev) => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    const handlePlantSubmit = async (e) => {
        e.preventDefault();

        const errors = validatePlant(plantData);
        setPlantErrors(errors);

        if (Object.keys(errors).length !== 0) return;

        const ok = await addPlant(plantData);

        if (ok) {
            alert(`¡La planta "${plantData.name}" se ha guardado correctamente!`);
            setPlantData(initialPlantData);
            if (fileInputRef.current) fileInputRef.current.value = null;
            navigate("/productlist");
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-[var(--color-secondary)] p-4">
            <form
                onSubmit={handlePlantSubmit}
                className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
                noValidate
            >
                <div className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b pb-2">
                    Añadir planta
                </div>

                <div className="mb-4">
                    <label htmlFor="name"
                        className="block text-[var(--color-primary)] font-semibold mb-2">
                        Nombre de la planta:
                    </label>

                    <input
                        id="name"
                        type="text"
                        value={plantData.name}
                        onChange={handlePlantChange}
                        aria-invalid={!!plantErrors.name}
                        aria-describedby={plantErrors.name ? "error-name" : undefined}
                        required

                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    </input>
                    {plantErrors.name && <p className="text-[var(--color-error)]">{plantErrors.name}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="price"
                        className="block text-[var(--color-primary)] font-semibold mb-2">
                        Precio de la planta:
                    </label>

                    <input
                        id="price"
                        type="number"
                        value={plantData.price}
                        onChange={handlePlantChange}
                        aria-invalid={!!plantErrors.price}
                        aria-describedby={plantErrors.price ? "error-name" : undefined}
                        required

                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    </input>
                    {plantErrors.price && <p className="text-[var(--color-error)]">{plantErrors.price}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description"
                        className="block text-[var(--color-primary)] font-semibold mb-2">
                        Descripción:
                    </label>

                    <input
                        id="description"
                        type="text"
                        value={plantData.description}
                        onChange={handlePlantChange}
                        aria-invalid={!!plantErrors.description}
                        aria-describedby={plantErrors.description ? "error-name" : undefined}
                        required

                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    </input>
                    {plantErrors.description && <p className="text-[var(--color-error)]">{plantErrors.description}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="category"
                        className="block text-[var(--color-primary)] font-semibold mb-2">
                        Categoría:
                    </label>

                    <select
                        id="category"
                        name="category"
                        value={plantData.category}
                        onChange={handlePlantChange}
                        aria-invalid={!!plantErrors.category}
                        aria-describedby={plantErrors.category ? "error-name" : undefined}
                        required

                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Plantas medianas/grandes">Plantas medianas/grandes</option>
                        <option value="Plantas pequeñas">Plantas pequeñas</option>
                        <option value="Plantas con flores">Plantas con flores</option>
                    </select>
                    {plantErrors.category && <p className="text-[var(--color-error)]">{plantErrors.category}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="image"
                        className="block text-[var(--color-primary)] font-semibold mb-2">
                        Imagen:
                    </label>

                    <input
                        id="image"
                        type="file"
                        onChange={handleFileChange}
                        aria-invalid={!!plantErrors.image}
                        aria-describedby={plantErrors.image ? "error-name" : undefined}
                        required

                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                    </input>
                    {plantErrors.image && <p className="text-[var(--color-error)]">{plantErrors.image}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="information"
                        className="block text-[var(--color-primary)] font-semibold mb-2">
                        Información de la planta:
                    </label>

                    <input
                        id="information"
                        type="text"
                        value={plantData.information}
                        onChange={handlePlantChange}
                        aria-invalid={!!plantErrors.information}
                        aria-describedby={plantErrors.information ? "error-name" : undefined}
                        required

                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    </input>
                    {plantErrors.information && <p className="text-[var(--color-error)]">{plantErrors.information}</p>}
                </div>


                {error && (
                    <p role="alert" className="mt-4 text-sm text-[var(--color-error)]">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--color-primary)] text-white py-2 px-4 rounded-lg font-semibold 
                        hover:bg-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)] 
                        focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                    {loading ? "Guardando..." : "Añadir Planta"}
                </button>
            </form>
        </div>
    );
}

export default FormAddPlant;