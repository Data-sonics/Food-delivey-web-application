import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";
import Header from "../components/Header";

const initialState = {
  name: "",
  description: "",
  rating: "",
  img: "",
  type: "",
};

const AddEdit = () => {
  const { id } = useParams();
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleRestaurant();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const addRestaurant = async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/restaurants`,
      data
    );
    if (response.status === 200) {
      toast.success("Added restaurant successfully");
    }
  };
  const updateRestaurant = async (data, id) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/restaurants/` + id, data)
      .then((res) => {
        console.log(res);
        toast.success("amjilttai zaslaa!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addRestaurant(state);
    } else {
      updateRestaurant(state, id);
    }
  };

  const getSingleRestaurant = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/ api/restaurants/${id}`
    );
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
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          placeholder="Review your star ..."
          onChange={handleInputChange}
          value={state.rating}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="img"
          name="img"
          placeholder="Enter image ..."
          onChange={handleInputChange}
          value={state.logo}
        />
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          id="cover"
          name="cover"
          placeholder="Enter cover image ..."
          onChange={handleInputChange}
          value={state.coverimg}
        />
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          name="type"
          placeholder="Enter type ..."
          onChange={handleInputChange}
          value={state.type}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
