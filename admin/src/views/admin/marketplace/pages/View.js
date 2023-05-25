import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [restaurant, setRestaurant] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleRestaurant(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log("restaurant", id);

  const getSingleRestaurant = async () => {
    const response = await axios.get(`/api/restaurants/${id}`);
    console.log("response", response);
    if (response.status === 200) {
      setRestaurant({ ...response.data });
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Restaurant Record Detail</p>
        </div>
        <div className="container">
          <img src={restaurant && restaurant.logo} alt={restaurant} />
          <br />
          <br />
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{restaurant && restaurant.name}</span>
          <br />
          <br />
          <strong>Description:</strong>
          <span>{restaurant && restaurant.description}</span>
          <br />
          <br />
          <strong>Rating:</strong>
          <span>{restaurant && restaurant.rating}</span>
          <br />
          <br />
          <strong>Type:</strong>
          <span>{restaurant && restaurant.type}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
