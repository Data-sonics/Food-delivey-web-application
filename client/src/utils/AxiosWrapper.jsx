import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const AxiosWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  axios.defaults.baseURL =
    process.env.REACT_APP_CALLBACK_URL || "http://localhost:8080";

  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = token;
      return config;
    },
    (error) => {
      toast.error("Хүсэлт явуулахад алдаа гарлаа!");
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      switch (status) {
        case 401:
          break;
        case 403:
          toast.error("Эрх хүрэлцэхгүй байна!");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/signin");
          break;
        case 400:
        case 404:
          toast.error("Хүсэлт алдаатай байна!");
          break;
        case 500:
          toast.error("Сервер дээр алдаа гарлаа!");
          break;
        default:
          toast.error("Алдаа гарлаа!");
      }
      return Promise.reject(error);
    }
  );
  return (
    <>
      {children}
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </>
  );
};
export default AxiosWrapper;
