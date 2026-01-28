import Card from "./Card";
import SearchBar from "./SearchBar";
import { useMemo, useState } from "react"; 
//useState para manejar el estado de la búsqueda, useMemo para optimizar cálculos de filtrado y categorías

/**
 * ProductListGeneric component displays a list of products filtered by search term and categorized.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.products - The list of products to display.
 * @param {Array} props.categories - The list of categories to filter products by.
 * @returns {JSX.Element} The rendered component.
 */
function ProductListGeneric({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState(""); //Guarda lo que escribe el usuario en el buscador


  //Si el usuario no ha introducido nada, se muestran todos los productos
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;

    //Busca el productos cuyo nombre incluye el término de búsqueda (case insensitive)
    const term = searchTerm.toLowerCase().trim();
    return products.filter(
      (p) =>
        p.name &&
        p.name.toLowerCase().includes(term)
    );
  }, [searchTerm, products]);

  //Se generan las categorías a partir de los productos filtrados
  const categories = useMemo(() => {
    return [
      ...new Set( //Elimina categorías duplicadas
        filteredProducts
          .map((p) => p.category) //Extrae categorías de los productos
          .filter(Boolean) //Elimina valores null/undefined
      ),
    ];
  }, [filteredProducts]);


  return (
    <div className="flex flex-col w-full gap-12 px-6">
      <h1 className="pt-10 text-3xl font-bold text-center text-[#474f23]">
        NUESTROS PRODUCTOS
      </h1>

      <SearchBar
        searchTerm={searchTerm} //Valor actual del input
        onSearchChange={setSearchTerm} //Función que actualiza el estado
        placeholder="Buscar plantas por nombre..."
      />

      
      {filteredProducts.length === 0 && ( // Mensaje si no hay productos que coincidan con la búsqueda
        <p className="mt-10 italic text-center text-red-500">
          No hay productos que coincidan con la búsqueda
        </p>
      )}


      {categories.map((category) => { //Filtrar los productos según su categoría
        const productosFiltrados = filteredProducts.filter(
          (p) => p.category === category
        );

        return (
          <section key={category}>
            <h2 className="pt-10 text-lg font-semibold underline text-[#474f23]">
              {category}
            </h2>

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
          </section>
        );
      })}
    </div>
  );
}

export default ProductListGeneric;
