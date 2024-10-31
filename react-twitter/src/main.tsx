import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer 
        draggable 
        closeOnClick 
        autoClose={5000} 
        theme="dark"
        position="bottom-right"
      />
    </BrowserRouter>
  </StrictMode>
);
