import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
