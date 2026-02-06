// import products from "../data/products";
import ProductListGeneric from "../components/List";
import { usePlants } from "../hooks/usePlants";

/**
 * ProductList component renders a list of products and a navigation button.
 *
 * @param {Object} props - The component props.
 * @param {Array} [props.categories=[]] - An optional array of categories to filter products.
 * @returns {JSX.Element} The rendered ProductList component.
 */
function ProductList() {
  const { data: products = [], loading, error } = usePlants();

  //CATEGORÍAS SACADAS DE LOS PRODUCTOS
  const categories = [...new Set(products.map(p => p.category))];

  if (loading) return <p className="p-4">Cargando productos...</p>;
  if (error) return <p className="p-4 text-[var(--color-error)]">{error}</p>;

  return (
    <>
      <a
        href="/"
        className="flex justify-start p-2 ml-4 text-black bg-white hover:underline rounded-2xl"
      >
        ← Volver al inicio
      </a>

      <ProductListGeneric
        products={products}
        categories={categories}
      />
    </>
  );
}

export default ProductList;
