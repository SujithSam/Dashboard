import React, { useState } from "react";
import logo from "../../Assets/Group 2.png";
import "./Sidebar.css";

import { SidebarData } from "../../Data/Data";

import logout2 from "../../Assets/logout2.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [Selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>ONLY1</h2>
      </div>
      <div className="sub-section">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={Selected === index ? "Menu-Item active" : "Menu-Item"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <li className="sidebar-link-tour">
                <Link className={item.cName} to={item.url}>
                  <img src={item.icon} alt="" />
                  <span>{item.heading}</span>
                </Link>
              </li>
            </div>
          );
        })}
      </div>
      <button className="btn-logout">
        <img src={logout2} alt="/" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
