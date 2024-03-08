import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MoviesContextProvider } from "./context/Movie.tsx";
import { AuthProvider } from "./context/Auth.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <MoviesContextProvider>
        <RouterProvider router={router} />
      </MoviesContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
