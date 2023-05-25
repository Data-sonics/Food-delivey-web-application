import axios from "axios";
import { useEffect, useState } from "react";

export const useCrud = (path) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`/` + path).then((res) => {
      setItems(res.data);
    });
  }, [path]);

  const deleteItem = (id) => {
    axios
      .delete(`/` + path + `/` + id)
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateItem = (id) => {
    axios
      .put(`/` + path + `/` + id)
      .then((res) => {
        setItems(items.map((item) => (item.id === id ? res.data : item)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createItem = (item) => {
    axios
      .post(`/ ` + path, item)
      .then((res) => {
        setItems([...items, res.data]);
        console.log("res and items", [...items, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(items);
  return { createItem, updateItem, deleteItem, items };
};
