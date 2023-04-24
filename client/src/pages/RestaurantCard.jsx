import React from "react";

// /components/unify hawtsn dotor bga
import Navbar from "../components/unify/Navbar";
import Footer from "../components/unify/Footer";

// /components/restaurantCard hawtsn dotor bga
import CardMainSection from "../components/restaurantsCard/CardMainSection";
import NavSection from "../components/restaurantsCard/NavSection";

function RestaurantCard() {
  return (
    <>
      <Navbar />
      <CardMainSection />
      <NavSection />
      <Footer />
    </>
  );
}

export default RestaurantCard;
