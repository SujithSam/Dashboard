import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";

import MainDash from "./Components/Routes/MainDash";
import MyTeam from "./Components/Routes/MyTeam";
import { Route, Routes } from "react-router-dom";
import Task from "./Components/Routes/Task";
import Calender from "./Components/Routes/Calender";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="Firsr-component">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/myteam" element={<MyTeam />} />
            <Route path="/" element={<MainDash />} />
            <Route path="/task" element={<Task />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
