import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CurrentUserContext } from "../contexts/currentUserProvider";

const useCurrentUser = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const signOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(undefined);
    toast.success("🦄Баяртай ;)", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/");
  };
  return { currentUser, setCurrentUser, signOut };
};

export default useCurrentUser;
