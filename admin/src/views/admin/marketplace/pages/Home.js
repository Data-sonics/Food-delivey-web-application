import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getRestaurants = async () => {
    const response = await axios.get("/api/restaurants");
    if (response.status === 200) {
      console.log(data);
      setData(response.data.data);
    }
  };
  const onDeleteRestaurant = async (id) => {
    if (
      window.confirm(
        "Are you sure that you wanted to delete that restaurant record"
      )
    );
    const response = await axios
      .delete("/api/restaurant/" + id)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
    if (response) {
      toast.success("Deleted restaurant successfully");
    }
  };
  console.log("data", data);
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr className="bg-amber-500">
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Description</th>
            <th style={{ textAlign: "center" }}>Rating</th>
            <th style={{ textAlign: "center" }}>LOGO</th>
            <th style={{ textAlign: "center" }}>Type</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.rating}</td>
                  <td>
                    <img src={item.img} alt="logo" className="image" />
                  </td>
                  <td>{item.type}</td>
                  <td>
                    <Link
                      to={`http://localhost:3333/admin/restaurants/update/${item.id}`}
                    >
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteRestaurant(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
