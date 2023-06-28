import React, { useEffect, useState } from "react";
import { AddLinks } from "../components/AddLinks";
import { ViewLinks } from "../components/ViewLinks";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export const LinkPage = () => {
  const [links, setLinks] = useState([]);
  const [searchDate, setSearchDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("useeffect");
  }, []);
  function addLink(link) {
    const today = new Date().toISOString().split("T")[0];
    if (today === searchDate) {
      setLinks([link, ...links]);
    }
  }
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="link-page">
      <div className="main-content">
        <h1 className="centered-title">Link Page</h1>
        <AddLinks addLink={addLink} />
        <ViewLinks
          links={links}
          setLinks={setLinks}
          searchDate={searchDate}
          setSearchDate={setSearchDate}
        />
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default LinkPage;