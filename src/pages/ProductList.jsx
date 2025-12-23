import products from "../data/products";
import ProductListGeneric from "../components/List";

/**
 * ProductList component renders a list of products and a navigation button.
 *
 * @param {Object} props - The component props.
 * @param {Array} [props.categories=[]] - An optional array of categories to filter products.
 * @returns {JSX.Element} The rendered ProductList component.
 */
function ProductList({ categories = [] }) {
  return (
    <>
      <button>
        <a
          href="/"
          className="flex justify-start p-2 ml-4 text-black bg-white hover:underline rounded-2xl"
        >
          ← Volver al inicio
        </a>
      </button>

      <ProductListGeneric
        products={products}
        categories={categories}
      />
    </>
  );
}

export default ProductList;
