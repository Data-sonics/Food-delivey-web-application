import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    axios
      .get("/api/currentUser", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCurrentUser(res.data);

        console.log("currentuserprovider", res.data);
      })
      .catch((err) => {
        console.log("Not signed in");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
