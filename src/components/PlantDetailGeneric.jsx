import Bubble from "./Bubble";

function PlantDetailGeneric({ plant }) {
  if (!plant) {
    return <h1 className="mt-10 text-center">Producto no encontrado</h1>;
  }

  return (
    <section className="max-w-5xl px-6 py-10 mx-auto">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        <img
          src={`/${plant.image}`}
          alt={plant.name}
          className="object-cover w-130 h-140 rounded-2xl"
        />

        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold mb-6 text-[rgba(71,79,35,1)]">
            {plant.name}
          </h1>

          <section className="space-y-3 text-lg">
            <p>{plant.description}</p>
            <p><strong>{plant.price}</strong></p>
            <Bubble>{plant.information}</Bubble>
          </section>
        </div>
      </div>
    </section>
  );
}

export default PlantDetailGeneric;
