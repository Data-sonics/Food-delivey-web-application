import React from "react";
// /components/restaurantCard hawtsn dotor bga
import CardMainSection from "../components/restaurantsCard/CardMainSection";
import CardTabs from "../components/restaurantsCard/CardTabs";
import { useParams } from "react-router-dom";

function RestaurantCard() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <CardMainSection />
      <CardTabs id={id} />
    </>
  );
}

export default RestaurantCard;
