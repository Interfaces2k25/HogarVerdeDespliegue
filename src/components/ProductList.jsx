import { Link } from "react-router-dom";
import Product from "../Product";
import products from "../data/products";

function ProductList({ categories }) {
  return (
    <div className="flex flex-col gap-12 w-full px-6">
      {categories.map((category) => (
        <section key={category}>
          <h2 className="contenedor_h4">{category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === category)
              .map((p) => (
                <Link key={p.id} to={`/producto/${p.id}`}>
                  <Product
                    name={p.name}
                    price={p.price}
                    description={p.description}
                    image={p.image}
                  />
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
