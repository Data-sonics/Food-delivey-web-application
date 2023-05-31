import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/admin/foods-management/addedit") {
      setActiveTab("AddFood");
    }
  }, [location]);
  return (
    <div className="header mt-5">
      <p className="logo">Food Management System</p>
      <div className="header-right">
        <Link to="https://data-sonics-project-admin.vercel.app/admin/foods-management/home">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="https://data-sonics-project-admin.vercel.app/admin/foods-management/addedit">
          <p
            className={`${activeTab === "AddFood" ? "active" : ""}`}
            onClick={() => setActiveTab("AddFood")}
          >
            Add Foods
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
