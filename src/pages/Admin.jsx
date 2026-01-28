import { Outlet } from "react-router-dom";

/**
 * Admin component that renders the FormAddPlant component.
 *
 * @component
 * @returns {JSX.Element} The rendered Admin component.
 */

function Admin() {
    return (
      <section className="max-w-xl mx-auto mt-10">
        <h1 className="mb-6 text-2xl font-bold">
          Panel de Administración
        </h1>
  
        {/* AQUÍ SE PINTA FormAddPlant */}
        <Outlet />
      </section>
    );
  }
  
  export default Admin;