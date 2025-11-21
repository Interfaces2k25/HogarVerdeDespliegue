import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Layout from "./pages/Layout";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import PlantDetail from "./pages/PlantDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {

  const categories = [
    "Plantas medianas/grandes",
    "Plantas pequeñas",
    "Plantas con flores"
  ];

  return (
    <>
    <NavBar />
    {/* <Header></Header> */}
      <Layout>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/productlist" element={<ProductList categories={categories} />} />
       <Route path="/producto/:id" element={<PlantDetail />} />
       </Routes>
      </Layout>
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

