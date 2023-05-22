import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./FoodAddEdit.css";
import { toast } from "react-toastify";
import Header from "./components/Header";

const initialState = {
  name: "",
  description: "",
  price: "",
  foodimg: "",
  restaurantId: "",
};

const AddEdit = () => {
  const { id } = useParams();
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleFood();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const addFood = async (data) => {
    const response = await axios.post("/api/foods", data);
    if (response.status === 200) {
      toast.success("Хоолоо амжилттай нэмлээ");
    }
  };
  const updateFood = async (data, id) => {
    axios
      .put("/api/foods/" + id, data)
      .then((res) => {
        console.log(res);
        toast.success("Амжилттай заслаа");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addFood(state);
    } else {
      updateFood(state, id);
    }
  };

  const getSingleFood = async () => {
    const response = await axios.get(`/api/foods/${id}`);
    if (response.status === 200) {
      setState({ ...response.data });
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Header />
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name ..."
          onChange={handleInputChange}
          value={state.name}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter description ..."
          onChange={handleInputChange}
          value={state.description}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter your price ..."
          onChange={handleInputChange}
          value={state.price}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="foodimg"
          name="foodimg"
          placeholder="Enter food image ..."
          onChange={handleInputChange}
          value={state.foodimg}
        />
        <label htmlFor="restaurantId">restaurantId</label>
        <input
          type="text"
          id="restaurantId"
          name="restaurantId"
          placeholder="Enter type ..."
          onChange={handleInputChange}
          value={state.restaurantId}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
