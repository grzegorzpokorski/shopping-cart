import React from "react";
import { ProductsList } from "./components/organisms/productsList/ProductsList";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <>
        <ProductsList />
      </>
    </ProductsProvider>
  );
}

export default App;
