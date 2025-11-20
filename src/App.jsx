import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contenedor from "./Contenedor"
// import products from "./data/products"
import Header from "./Header"
import Product from "./Product"
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";


function App() {

  const categories = [
    "Plantas medianas/grandes",
    "Plantas pequeñas",
    "Plantas con flores"
  ];

  return (
    <>
    <NavBar />
    <Header></Header>

      <Contenedor>
       <Routes>
       <Route path="/" element={<ProductList categories={categories} />} />
       </Routes>
      </Contenedor>
      <Footer />
    </>
  );
}

export default App

// import Contenedor from "./Contenedor";
// import productos from "./data/productos";
// import Header from "./Header";
// import Product from "./Product";

// function App() {

//   return (
//     <>
//       <Header />

//       <Contenedor>
//         <main
//           className="flex flex-col gap-12 w-full px-6"
//           aria-labelledby="main-title"
//         >
//           <h1 id="main-title" className="sr-only">
//             Nuestros productos
//           </h1>

//           {/* Lista sin categorías (ABAJO ESTÁ EL CÓDIGO CUANDO LO MOSTRABA POR CATEGORÍAS)*/}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {productos.map((p, index) => (
        
//                 <Product
//                   key={index}
//                   name={p.name}
//                   price={p.price}
//                   description={p.description}
//                   image={p.image}
//                 />
            
//             ))}
//           </div>

//         </main>
//       </Contenedor>
//     </>
//   );
// }

// export default App;

