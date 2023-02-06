import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { UIProvider } from "./providers/UIProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
