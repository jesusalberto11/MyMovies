import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MoviesContextProvider } from "./context/Movie.tsx";
import { AuthProvider } from "./context/Auth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
