import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../css/logo.png";
import "../App.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <h1>
          <Link to={"/"} className="header-title">
            Travel Linkiland
          </Link>
        </h1>
      </div>
      <div className="header-right">
        <nav>
          <Auth />
        </nav>
      </div>
    </header>
  );
};
