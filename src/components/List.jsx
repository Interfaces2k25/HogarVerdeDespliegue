import Card from "./Card";
import SearchBar from "./SearchBar";
import { useMemo, useState } from "react";

function ProductListGeneric({ products = [], categories = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = useMemo(() => {
    if (!searchTerm) return products;

    const term = searchTerm.toLowerCase();
    return products.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
  }, [searchTerm, products]);

  return (
    <div className="flex flex-col w-full gap-12 px-6">
      <h1 className="pt-10 text-3xl font-bold text-center text-[#474f23]">
        NUESTROS PRODUCTOS
      </h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar plantas por nombre..."
      />

      {categories.map((category) => {
        const productosFiltrados = filteredPlants.filter(
          (p) => p.category === category
        );

        return (
          <section key={category}>
            <h2 className="pt-10 text-lg font-semibold underline text-[#474f23]">
              {category}
            </h2>

            {productosFiltrados.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <p className="text-sm italic text-gray-500">
                No hay resultados.
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default ProductListGeneric;
