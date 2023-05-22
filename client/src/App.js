import "./styles/index.css";

import { Route, Routes } from "react-router-dom";

// route elements

import Restaurants from "./pages/Restaurants";

import Home from "./pages/Home";

import RestaurantsCard from "./pages/RestaurantCard";
import Checkout from "./pages/Checkout";
import Navbar from "./components/unify/Navbar";
import { useContext } from "react";
import { BackgroundContext } from "./contexts/BackgroundProvider";
import Footer from "./components/unify/Footer";
import Contacts from "./pages/Contacts";
import useCurrentUser from "./hooks/useCurrentUser";
import UserProfile from "./pages/UserProfile";
import { NotFoundScreen } from "./pages/NotFoundScreen";
function App() {
  const { color } = useContext(BackgroundContext);
  const { currentUser } = useCurrentUser();
  console.log("currentUser:", currentUser);

  return (
    <>
      <Navbar background={color} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurantscard" element={<RestaurantsCard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contactUs" element={<Contacts />} />
        {currentUser && <Route path="/userProfile" element={<UserProfile />} />}
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
