import "./styles/index.css";
import { Route, Routes } from "react-router-dom";

// route elements

import Restaurants from "./pages/Restaurants";

import Home from "./pages/Home";

import RestaurantsCard from "./pages/RestaurantCard";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurants" element={<Restaurants />} />
        <Route exact path="/restaurantscard" element={<RestaurantsCard />} />
      </Routes>
    </>
  );
}

export default App;
