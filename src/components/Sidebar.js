import React from "react";
import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
// import image from "../images/profile.jpg";

// const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username= {localStorage.getItem("users").replaceAll('"','')}
          // caption= {localStorage.getItem("users").replaceAll('"','')}
          caption= "You are currently logged in"
          urlText="View"
          iconSize="big"
          // image={image}
          profileImagePath={localStorage.getItem("profileimage")}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
