import { useState } from "react";

/**
 * FormAddPlant component for adding a new plant.
 * 
 * This component manages the state of the form data and handles
 * form submission with validation for required fields.
 * 
 * @component
 * @returns {JSX.Element} The rendered form for adding a plant.
 */
function FormAddPlant(){
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
        information: ""
    })

    const handleChange = (e) => {
        console.log(formData);

        const {id, type, value, checked, files} = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : type === "file" ? files[0] : value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        if(formData.name == null || formData.name === ""){
            setError("Debes introducir un nombre")
            return;
        }
        if(formData.price < 0){
            setError("El precio debe de ser mayor o igual a 0")
            return;
        }
        if(formData.description == null || formData.description === ""){
            setError("Debes introducir una descripción")
            return;
        }
        if(formData.category == null || formData.category === ""){
            setError("Debes seleccionar una categoría")
            return;
        }
        if(!formData.image || !formData.image.name.toLowerCase().endsWith(".png")){
            setError("Debes importar una imagen")
            return;
        }
        if(formData.information == null || formData.information === ""){
            setError("Debes introducir una información")
            return;
        }
        setError("");
        console.log("Datos del formulario: ", formData);
    }

    return(
        <div className="flex justify-center items-center min-h-screen bg-[rgba(212,218,178,1)] p-4">
            <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
            noValidate
            >
                <div className="text-2xl font-bold mb-6 text-[rgba(71,79,35,1)] border-b pb-2">
                    Añadir planta
                </div>

                <div className="mb-4">
                    <label htmlFor="name"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Nombre de la planta:
                    </label>

                    <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                </div>

                <div className="mb-4">
                    <label htmlFor="price"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Precio de la planta:
                    </label>

                    <input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                </div>

                <div className="mb-4">
                    <label htmlFor="description"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Descripción:
                    </label>

                    <input
                    id="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                </div>

                <div className="mb-4">
                    <label htmlFor="category"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Categoría:
                    </label>

                    <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]"
                    >
                        <option value="option">Selecciona una opción</option>
                        <option value="medium/big">Plantas medianas/grandes</option>
                        <option value="small">Plantas pequeñas</option>
                        <option value="flower">Plantas con flores</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="image"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Imagen:
                    </label>

                    <input
                    id="image"
                    type="file"
                    onChange={handleChange}
                    aria-invalid={!!error}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]"
                    >
                    </input>
                </div>

                <div className="mb-4">
                    <label htmlFor="information"
                    className="block text-[rgba(71,79,35,1)] font-semibold mb-2">
                        Información de la planta:
                    </label>

                    <input
                    id="information"
                    type="text"
                    value={formData.information}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    required

                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(71,79,35,1)]">
                    </input>
                </div>

                <div>
                    <button
                    type="submit"
                    className="w-full bg-[rgba(71,79,35,1)] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#323524] focus:outline-none focus:ring-4 focus:ring-[rgba(212,218,178,1)] focus:ring-opacity-50 transition duration-150 ease-in-out"
                    >
                        Guardar
                    </button>
                    <div>
                        {error && <p className="px-3 py-2 mt-2 text-red-700 bg-red-100 rounded-lg">{error}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormAddPlant;