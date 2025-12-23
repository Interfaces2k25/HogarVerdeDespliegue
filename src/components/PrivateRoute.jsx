import { Outlet } from "react-router-dom";

/**
 * PrivateRoute component that renders children if the user is authenticated.
 * Otherwise, it displays a message prompting the user to log in.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isAuthenticated - Indicates if the user is authenticated.
 * @returns {JSX.Element} The rendered component.
 */
function PrivateRoute({ isAuthenticated }) {
  return (
    isAuthenticated ? (<Outlet />) : (
      <p className="mt-10 text-center text-red-700">
        Debes iniciar sesión para acceder a la sección de administración
      </p>
    )
  );
}

export default PrivateRoute;
