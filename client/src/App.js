import "./styles/index.css";
import { Route, Routes } from "react-router-dom";

// route elements
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurants" element={<Restaurants />} />
      </Routes>
    </>
  );
}

export default App;
