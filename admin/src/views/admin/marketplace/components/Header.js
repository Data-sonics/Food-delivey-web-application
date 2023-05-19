import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/admin/restaurants/addedit") {
      setActiveTab("AddRestaurant");
    }
  }, [location]);
  return (
    <div className="header">
      <p className="logo">Restaurant Management System</p>
      <div className="header-right">
        <Link to="http://localhost:3333/admin/restaurants/home">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="http://localhost:3333/admin/restaurants/addedit">
          <p
            className={`${activeTab === "AddRestaurant" ? "active" : ""}`}
            onClick={() => setActiveTab("AddRestaurant")}
          >
            Add Restaurant
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
