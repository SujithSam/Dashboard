import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./MyTeam.css";
import { TeamData } from "../../Data/Data";
import uxui from "../../Assets/uxui.png";
import settings from "../../Assets/settings.png";
import LA from "../../Assets/LeftA.png";
import RA from "../../Assets/RightA.png";
import Alina from "../../Assets/Alina.png";

import Progress from "@delowar/react-circle-progressbar";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const MyTeam = () => {
  const data1 = {
    // labels: ["one", "two"],
    labels: ["m", "f"],

    datasets: [
      {
        data: [33, 66],
        backgroundColor: ["#FFD339", "#3954FF"],
      },
    ],
  };
  const options1 = {
    // plugins: {
    //   datalabels: {
    //     formatter: function (value, context) {
    //       return context.chart.data.labels[context.dataIndex];
    //     },
    //   },
    // },
  };
  return (
    <div className="MyTeamO">
      <div className="headerO">
        <div className="heading-text">
          <h1>My Team</h1>
        </div>
        <div className="icons">
          <FaSearch className="icons-sub" size="1.1rem" />
          <FaBell className="icons-sub" size="1.1rem" />
          <FaUserCircle className="icons-sub" size="1.1rem" />
        </div>
      </div>
      <div className="main-section">
        <div className="Team-members">
          <hr
            style={{
              backgroundColor: "rgba(31, 33, 39, 0.1);",
              height: "0px",

              width: "100%",
            }}
          ></hr>
          <span>Team Members</span>
          <div className="Team-Member-PerformanceT">
            {TeamData.map((card, id) => {
              return (
                <div className="Team-Member-Performance-Containercontainer">
                  {/* <div className="Performance-Containercontainer"> */}
                  <div className="Performance-Containercontainer-Top">
                    <img src={card.dots} className="top-img" alt="" />
                    <div className="Performance-Containercontainer-bottom">
                      <img src={card.img} alt="" className="class-iPS" />
                      <div className="PName">{card.Name}</div>
                      <div className="Email">{card.email}</div>
                    </div>
                    {/* </div> */}

                    {/* <div className="Performance-Containercontainer-bottoml">
                      <div className="Role">{card.Role}</div>
                    </div> */}
                  </div>
                  <div className="Performance-Containercontainer-bottoml">
                    <div className="PRole">{card.Role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Right-Team">
          <div className="RT1">
            <img src={uxui} alt="" />
            <span
              style={{
                padding: "2px",
                lineHeight: "30px",
                fontWeight: "500",
              }}
            >
              Nxt_UXUI
            </span>
            <span
              style={{
                letterSpacing: "0.17em",
                fontWeight: "400",
                color: "rgba(31, 33, 39, 0.58)",

                padding: "2px",
              }}
            >
              A designer team
            </span>
            <span
              style={{
                color: "rgba(31, 33, 39, 0.58)",
                padding: "2px",
                fontWeight: "300",
              }}
            >
              nxt_uxui@gmail.com
            </span>
            <hr
              style={{
                backgroundColor: "rgba(31, 33, 39, 0.1);",
                height: "0px",

                width: "100%",
              }}
            ></hr>
          </div>
          <div className="RT2">
            <div className="RT2-img">
              <img src={settings} alt="" />
            </div>
            <div className="RT2-RB">
              <img src={LA} className="arrow" alt="" />
              <div className="RT-CH">
                <Progress
                  isBgShadow
                  percent="75"
                  bgShadow={{
                    inset: true,
                    vertical: 2,
                    horizontal: 2,
                    blur: 4,
                    opacity: 0.4,
                    color: "rgba(57, 84, 255, 0.08)",
                  }}
                  emptyColor="rgba(57, 84, 255, 0.08)"
                  borderWidth="6"
                  borderBgWidth="30"
                  fillColor=" #3954FF"
                >
                  <div className="RT-CH-I">PROJECT</div>

                  <div className="RT-CH-II">ACTIVITY</div>

                  <div className="RT-CH-III"> 75%</div>
                </Progress>
              </div>
              <img src={RA} className="arrow" alt="" />
            </div>
          </div>
          <div className="RT3">
            <img className="RT3-IMG" src={Alina} alt="" />
            <div className="RT3-CONT">
              <div className="RT3-CONT-Name">Alina Endorson</div>
              <div className="RT3-CONT-role">CEO and Team Leader</div>
            </div>
          </div>
          <div className="RT4">
            <div className="RT4-T">Total Team Member</div>
            <div className="RT4-TI">
              <div className="RT4-N">25</div>
              <div
                style={{
                  width: "136px",
                  height: "160px",
                  marginLeft: "100px",
                }}
              >
                <Pie data={data1} options={options1}></Pie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
