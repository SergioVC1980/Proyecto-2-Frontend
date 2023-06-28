import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/Header.css";
export const Auth = () => {
  const { isAuthenticated } = useAuth();
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link to={"/register"}>Register</Link>
      </li>
      <li className="nav-item">
        <Link to={"/login"}>Login</Link>
      </li>
      {isAuthenticated && (
        <>
          <li className="nav-item">
            <Link to={"/links"}>Links</Link>
          </li>
          <li className="nav-item">
            <Link to={"/edit-profile"}>Edit Profile</Link>
          </li>
        </>
      )}
    </ul>
  );
};





