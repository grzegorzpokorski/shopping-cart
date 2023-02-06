import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { UIProvider } from "./providers/UIProvider";
import { ProductsProvider } from "./providers/ProductsProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIProvider>
        <ProductsProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </ProductsProvider>
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
