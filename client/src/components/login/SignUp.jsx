import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function SignUp({ setType }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const submitRegister = () => {
    const body = { email, password, repassword, phone, name };
    axios.post("/api/register", body).then(() => {
      toast.success("🦄Амжилттай бүртгэлээ.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setType("signIn");
    });
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        submitRegister();
      }}
      action="#"
    >
      <div>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Your name"
          required={true}
        />
      </div>
      <div>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Phone:
        </label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Your Phone Number"
          required={true}
        />
      </div>
      <div>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="name@mail.com"
          required={true}
        />
      </div>
      <div>
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password:
        </label>
        <input
          type="password"
          value={password}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Repassword:
        </label>
        <input
          type="password"
          value={repassword}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required={true}
          onChange={(e) => {
            setRepassword(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-primary-600 bg-amber-500 hover:bg-primary-700  focus:outline-none  font-md rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Sign Up
      </button>
      <div className=" text-center">
        <button
          onClick={() => setType("signIn")}
          className="font-sm text-primary-600 hover:underline "
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default SignUp;
