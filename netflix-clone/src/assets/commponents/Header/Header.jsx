import React from "react";
import "./header.css";
import logo from "../../images/logotwo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header">
      {/* Left: Logo + Nav */}
      <div className="header_left">
        <img src={logo} alt="Netflix Logo" className="header_logo" />
        <ul className="header_nav">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Right: Icons */}
      <div className="header_right">
        <ul >
          <li>
            <SearchIcon />
          </li>
          <li>
            {" "}
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
