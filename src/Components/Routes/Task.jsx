import React from "react";
import "./Task.css";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Taskimg from "../../Assets/task.png";
import { NewProjectData } from "../../Data/Data";
import { WorkInProgressData } from "../../Data/Data";
import { UnderReviewData } from "../../Data/Data";
import { CompletedData } from "../../Data/Data";

import { HiPaperClip } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";
import { HiOutlineClock } from "react-icons/hi2";
import { Progress } from "react-sweet-progress";
import { CiCirclePlus } from "react-icons/ci";
import "react-sweet-progress/lib/style.css";
function Task() {
  return (
    <div className="TaskT">
      <div className="headerT">
        <div className="heading-text">
          <h1>Task</h1>
        </div>
        <div className="icons">
          <FaSearch className="icons-sub" size="1.1rem" />
          <FaBell className="icons-sub" size="1.1rem" />
          <FaUserCircle className="icons-sub" size="1.1rem" />
        </div>
      </div>
      <div className="Task-container">
        <hr
          style={{
            backgroundColor: "rgba(31, 33, 39, 0.1);",
            height: "0px",

            width: "100%",
          }}
        ></hr>
        <div className="Task-main-container">
          <div className="New-project">
            <div className="Task-text-i">
              <div className="Task-text-i-title">New Project</div>
              <div className="Task-text-i-img">
                <img src={Taskimg} alt="" />
              </div>
            </div>
            <div className="Task-card-np">
              {NewProjectData.map((card, id) => {
                return (
                  <div className="Task-card-Containercontainer-np">
                    <img src={card.img} className="Task-card-img-np" alt="" />

                    <div className="Task-card-title-np">{card.title}</div>
                    <div className="Task-card-text-np">{card.text}</div>
                    <div className="Task-card-icons-np">
                      <div className="Attachment">
                        <HiPaperClip></HiPaperClip>10
                      </div>
                      <div className="Task-count">
                        <HiCheckCircle></HiCheckCircle>3/5
                      </div>
                      <div className="Time-count">
                        <HiOutlineClock></HiOutlineClock> 2W left
                      </div>
                    </div>
                    <div className="progress-bar-task">
                      <Progress
                        percent={55}
                        status="success"
                        theme={{
                          success: {
                            symbol: " ",
                            color: "#3954FF",
                          },
                        }}
                      />
                    </div>
                    <div className="extra">
                      <CiCirclePlus></CiCirclePlus>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Work-in-progess">
            <div className="Task-text-ii">
              <div className="Task-text-ii-title">Work in Progress</div>
              <div className="Task-text-ii-img">
                <img src={Taskimg} alt="" />
              </div>
            </div>
            <div className="Task-card-wp">
              {WorkInProgressData.map((card, id) => {
                return (
                  <div className="Task-card-Containercontainer-wp">
                    <img src={card.img} className="Task-card-img-wp" alt="" />

                    <div className="Task-card-title-wp">{card.title}</div>
                    <div className="Task-card-text-wp">{card.text}</div>
                    <div className="Task-card-icons-wp">
                      <div className="Attachment">
                        <HiPaperClip></HiPaperClip>10
                      </div>
                      <div className="Task-count">
                        <HiCheckCircle></HiCheckCircle>3/5
                      </div>
                      <div className="Time-count">
                        <HiOutlineClock></HiOutlineClock> 2W left
                      </div>
                    </div>
                    <div className="progress-bar-task">
                      <Progress
                        percent={55}
                        status="success"
                        theme={{
                          success: {
                            symbol: " ",
                            color: "#3954FF",
                          },
                        }}
                      />
                    </div>
                    <div className="extra">
                      <CiCirclePlus></CiCirclePlus>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Under-review">
            <div className="Task-text-iii">
              <div className="Task-text-iii-title">Under Review</div>
              <div className="Task-text-iii-img">
                <img src={Taskimg} alt="" />
              </div>
            </div>
            <div className="Task-card-ur">
              {UnderReviewData.map((card, id) => {
                return (
                  <div className="Task-card-Containercontainer-ur">
                    <img src={card.img} className="Task-card-img-ur" alt="" />

                    <div className="Task-card-title-ur">{card.title}</div>
                    <div className="Task-card-text-ur">{card.text}</div>
                    <div className="Task-card-icons-ur">
                      <div className="Attachment">
                        <HiPaperClip></HiPaperClip>10
                      </div>
                      <div className="Task-count">
                        <HiCheckCircle></HiCheckCircle>3/5
                      </div>
                      <div className="Time-count">
                        <HiOutlineClock></HiOutlineClock> 2W left
                      </div>
                    </div>
                    <div className="progress-bar-task">
                      <Progress
                        percent={55}
                        status="success"
                        theme={{
                          success: {
                            symbol: " ",
                            color: "#3954FF",
                          },
                        }}
                      />
                    </div>
                    <div className="extra">
                      <CiCirclePlus></CiCirclePlus>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Completed">
            <div className="Task-text-iiii">
              <div className="Task-text-iiii-title">Completed</div>
              <div className="Task-text-iiii-img">
                <img src={Taskimg} alt="" />
              </div>
            </div>
            <div className="Task-card-c">
              {CompletedData.map((card, id) => {
                return (
                  <div className="Task-card-Containercontainer-c">
                    <img src={card.img} className="Task-card-img-c" alt="" />

                    <div className="Task-card-title-c">{card.title}</div>
                    <div className="Task-card-text-c">{card.text}</div>
                    <div className="Task-card-icons-c">
                      <div className="Attachment">
                        <HiPaperClip></HiPaperClip>10
                      </div>
                      <div className="Task-count">
                        <HiCheckCircle></HiCheckCircle>3/5
                      </div>
                      <div className="Time-count">
                        <HiOutlineClock></HiOutlineClock> 2W left
                      </div>
                    </div>
                    <div className="progress-bar-task">
                      <Progress
                        percent={55}
                        status="success"
                        theme={{
                          success: {
                            symbol: " ",
                            color: "#3954FF",
                          },
                        }}
                      />
                    </div>
                    <div className="extra">
                      <CiCirclePlus></CiCirclePlus>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
