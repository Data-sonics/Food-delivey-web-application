import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./FoodView.css";

const View = () => {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleFood(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log("restaurant", id);

  const getSingleFood = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/foods/${id}`
    );
    console.log("response", response);
    if (response.status === 200) {
      setData({ ...response.data });
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Restaurant Record Detail</p>
        </div>
        <div className="container">
          <img src={data && data.logo} alt={data} />
          <br />
          <br />
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{data && data.name}</span>
          <br />
          <br />
          <strong>Description:</strong>
          <span>{data && data.description}</span>
          <br />
          <br />
          <strong>Price:</strong>
          <span>{data && data.price}</span>
          <br />
          <br />
          <strong>RestaurantId</strong>
          <span>{data && data.restaurantId}</span>
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
