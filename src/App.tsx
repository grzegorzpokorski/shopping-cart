import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Favorite } from "./pages/Favorite";
import "./../i18next.config";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historia" element={<History />} />
      <Route path="/ulubione" element={<Favorite />} />
    </Routes>
  );
}

export default App;
