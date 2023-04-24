import "./styles/index.css";
import { Route, Routes } from "react-router-dom";

// route elements
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
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
