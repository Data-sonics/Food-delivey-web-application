import React from "react";

// /components/unify hawtsn dotor bga
import Navbar from "../components/unify/Navbar";
import Footer from "../components/unify/Footer";

// /components/restaurantCard hawtsn dotor bga
import CardMainSection from "../components/restaurantsCard/CardMainSection";
import CardTabs from "../components/restaurantsCard/CardTabs";

function RestaurantCard() {
  return (
    <>
      <Navbar />
      <CardMainSection />
      <CardTabs />
      <Footer />
    </>
  );
}

export default RestaurantCard;
