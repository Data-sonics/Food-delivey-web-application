import React from "react";

// /components/unify folder dotor bga
import Navbar from "../components/unify/Navbar";
import Footer from "../components/unify/Footer";

// /components/restaurants   folder dotor bga
import RestaurantsMain from "../components/restaurants/RestaurantsMain";

function Restaurants() {
  return (
    <>
      <Navbar />
      <RestaurantsMain />
      <Footer />
    </>
  );
}

export default Restaurants;
