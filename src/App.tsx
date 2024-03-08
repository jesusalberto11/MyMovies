import { Outlet } from "react-router-dom";
import AppHeader from "./components/layout/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
