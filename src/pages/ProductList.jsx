import { Link } from "react-router-dom";
import Product from "./Product";
import products from "../data/products";
import Card from "../components/Card";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";

function ProductList({ categories }) {
  const [searchTerm, setSearchTerm] = useState(""); //Guardar el texto que el usuario introduce en el buscador

  // Usamos useMemo para memorizar la lista filtrada.
  // Solo se recalcula si 'searchTerm' cambia.
  const filteredPlants = useMemo(() => {
    if (!searchTerm) {
      return products;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return products.filter((plant) =>
      // Filtra por el nombre de la película
      plant.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);


  return (
    <div className="flex flex-col gap-12 w-full px-6">

      <button>
        <a href="/" className="text-black hover:underline ml-4 bg-white p-2 rounded-2xl flex justify-start ">← Volver al inicio</a>
      </button>

      <h1 className="contenedor__h1">NUESTROS PRODUCTOS</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar películas por nombre..."
      />

      {categories.map((category) => {
        // Filtrar dentro de cada categoría usando filteredPlants
        const productosFiltrados = filteredPlants.filter(
          (p) => p.category === category
        );

        return (
          <section key={category}>
            <h2 className="contenedor_h4">{category}</h2>

            {productosFiltrados.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productosFiltrados.map((p) => (
                  <Card
                    key={p.id}
                    image={p.image}
                    name={p.name}
                    price={p.price}
                    to={`/producto/${p.id}`}
                  >
                    {p.description}
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">No hay resultados.</p>
            )}
          </section>
        );
      })}

      {/* {categories.map((category) => (
        <section key={category}>
          <h2 className="contenedor_h4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === category)
              .map((p) => (
                <Card
                  key={p.id}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  to={`/producto/${p.id}`}
                >
                  {p.description}
                </Card>
              ))}
          </div>
        </section>
      ))} */}
    </div>
  );
}

export default ProductList;
