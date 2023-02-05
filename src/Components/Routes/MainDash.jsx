import React from "react";
import "./MainDash.css";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import AreaChartL from "../AreaChart/AreaChartL";
import { PerformanceData } from "../../Data/Data";

const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="header">
        <div className="heading-text">
          <h1>Dashboard</h1>
        </div>
        <div className="icons">
          <FaSearch className="icons-sub" size="1.1rem" />
          <FaBell className="icons-sub" size="1.1rem" />
          <FaUserCircle className="icons-sub" size="1.1rem" />
        </div>
      </div>
      <div className="dashboard-components">
        <Cards />
        <Chart />
      </div>
      <div className="dashborad-L">
        <div className="dashboardlast">
          <AreaChartL />
        </div>
        <div className="Performance">
          <span>Team Member Performance</span>

          {PerformanceData.map((card, id) => {
            return (
              <div className="PerformanceContainercontainer">
                <div className="PerformanceContainer">
                  <div className="class-ll">
                    <img src={card.img} alt="" className="class-i" />
                    <div className="class-ii">
                      <div className="Name">{card.Name}</div>
                      <div className="Role">{card.Role}</div>
                    </div>
                  </div>
                  <div className="class-iii">
                    <div className="score">{card.score}</div>
                  </div>
                </div>
                <hr
                  style={{
                    backgroundColor: "rgba(31, 33, 39, 0.1)",

                    marginLeft: "80px",
                  }}
                ></hr>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainDash;
