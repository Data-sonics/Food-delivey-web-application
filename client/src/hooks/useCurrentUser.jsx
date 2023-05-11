import { useContext } from "react";
import { toast } from "react-toastify";
import { CurrentUserContext } from "../contexts/currentUserProvider";

const useCurrentUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const signOut = () => {
    // localStorage.removeItem("currentUser");
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
  };
  return { currentUser, setCurrentUser, signOut };
};

export default useCurrentUser;
