import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Foods.css";
import axios from "axios";
import { toast } from "react-toastify";

const Foods = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getFoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getFoods = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/foods`
    );
    if (response.status === 200) {
      console.log(data);
      setData(response.data.data);
    }
  };
  const onDeleteFood = async (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that food record")
    );
    const response = await axios
      .delete(`${process.env.REACT_APP_API_URL}/api/foods/` + id)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })

      .catch((err) => {
        console.log(err);
      });
    if (response) {
      toast.success("Хоолоо амжилттай устгалаа");
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
            <th style={{ textAlign: "center" }}>Food Image</th>
            <th style={{ textAlign: "center" }}>Price</th>
            <th style={{ textAlign: "center" }}>RestaurantId</th>
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
                  <td>
                    <img src={item.foodimg} alt="foodsimg" className="image" />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.restaurantId}</td>
                  <td>{item.type}</td>
                  <td>
                    <Link
                      to={`http://localhost:3333/admin/foods-management/update/${item.id}`}
                    >
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteFood(item.id)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`http://localhost:3333/admin/foods-management/FoodView/${item.id}`}
                    >
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

export default Foods;
