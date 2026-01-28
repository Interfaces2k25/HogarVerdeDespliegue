import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

import Footer from "./Footer";
import Layout from "../pages/Layout";
import FormAddPlant from "../pages/FormAddPlant";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import PlantDetail from "../pages/PlantDetail";
import Admin from "../pages/Admin";


const PrivateRoute = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  //Si no está logueado redirige al home
  if (!userLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function AppRoutes() {

  const categories = [
    "Plantas medianas/grandes",
    "Plantas pequeñas",
    "Plantas con flores",
  ];

  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList categories={categories} />} />
          <Route path="/producto/:id" element={<PlantDetail />} />

          {/* Rutas de Administración (Anidadas) */}
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>}>
            {/* Ruta por defecto (Redirige en Admin.jsx) o la primera sub-página */}
            <Route index element={<FormAddPlant />} /> {/* <Route index> es la ruta por defecto en /admin */}
            {/* Sub-Rutas específicas */}
            <Route path="formaddplant" element={<FormAddPlant />} />
          </Route>

          {/* Página 404 */}
          <Route
            path="*"
            element={
              <Layout titulo="Página no encontrada">
                <p>La ruta no existe.</p>
              </Layout>
            }
          />

        </Routes>
      </Layout>

      <Footer />
    </>
  );
}

export default AppRoutes;
