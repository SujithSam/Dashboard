import vector1 from "../Assets/Vector1.png";
import vector2 from "../Assets/Vector2.png";
import vector3 from "../Assets/Vector3.png";
import vector4 from "../Assets/Vector4.png";
import vector5 from "../Assets/Vector5.png";

import vector7 from "../Assets/Vector7.png";
import dots from "../Assets/threedots.png";

import davidesoni from "../Assets/David Esoni.png";
import ripponvideo from "../Assets/Rippon Video.png";
import yesminjeo from "../Assets/Yesmin Jeo.png";
import adritakha from "../Assets/Adrita Kha.png";

import davides from "../Assets/davides.png";
import ripponv from "../Assets/ripponv.png";
import yesminj from "../Assets/yeasminj.png";
import adritak from "../Assets/adritak.png";
import aliqamacale from "../Assets/aliqamacale.png";
import tannimhassan from "../Assets/tannimhassan.png";
import juliaroberts from "../Assets/juliaroberts.png";
import juliarob from "../Assets/juliarob.png";
import martinkha from "../Assets/martinkha.png";

import np1 from "../Assets/np1.png";
import np2 from "../Assets/np2.png";
import wp1 from "../Assets/wp1.png";
import wp2 from "../Assets/wp2.png";
import ur1 from "../Assets/ur1.png";
import ur2 from "../Assets/ur2.png";
import c1 from "../Assets/c2.png";
import c2 from "../Assets/c2.png";

export const SidebarData = [
  {
    icon: vector7,
    heading: "Dashboard",
    url: "/",
    cName: "sb-links",
  },
  { icon: vector1, heading: "My Team", url: "/myteam", cName: "sb-links" },
  { icon: vector2, heading: "Task", url: "/task", cName: "sb-links" },
  { icon: vector3, heading: "Calender", url: "/calender", cName: "sb-links" },
  { icon: vector4, heading: "Report", url: "/report", cName: "sb-links" },
  { icon: vector5, heading: "Settings", url: "/settings", cName: "sb-links" },
];

export const CardsData = [
  {
    title: "Works",
    color: {
      background: "#FFFFFF",
      pathColor: "#FFD339",
    },
    barValue: 50,
    value: "75",
    png: dots,
    txt: "Works Today",
  },
  {
    title: "Statistics",
    color: {
      background: "#FFFFFF",
      pathColor: "#9539FF",
    },
    barValue: 59,
    value: "75",
    png: dots,
    txt: "Works Today",
  },
  {
    title: "Analytics",
    color: {
      background: "#FFFFFF",
      pathColor: "#FF6D39",
    },
    barValue: 25,
    value: "310",
    png: dots,
    txt: "Analytics Today",
  },
  {
    title: "Tasks",
    color: {
      background: "#FFFFFF",
      pathColor: "#3954FF",
    },
    barValue: 75,
    value: "15",
    png: dots,
    txt: "Task Today",
  },
];

export const ChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: [
    {
      label: "Received",
      data: [100, 110, 135, 115, 80, 105],
      backgroundColor: "#3954FF",
      borderColor: "black",
      borderWidth: 1,
      barThickness: 6,
    },
    {
      label: "Completed",
      data: [50, 80, 110, 100, 45, 95],
      backgroundColor: "#FFD339",
      borderColor: "black",
      borderWidth: 1,
      barThickness: 6,
    },
  ],
};

export const ChartOptions = {};

export const AreaChart = {
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23],
    },
  ],

  options: {
    chart: {
      id: "apexchart-example",
      type: "area",
      height: "428px",
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },
    xaxis: {
      categories: [" Jan", "Feb", "Mar", "Apr", "May", "June"],
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      // gradient: {
      //   shadeIntensity: 1,
      //   opacityFrom: 0.7,
      //   opacityTo: 0.9,
      //   stops: [0, 90, 100],
      // },
      colors: ["#3954FF"],
    },
    stroke: {
      curve: "smooth",
      colors: ["#3954FF"],
    },
    grid: {
      show: true,
    },
  },
};
export const PerformanceData = [
  {
    Name: "David Esoni",
    Role: "Project Manager",
    score: "9.8",
    img: davidesoni,
  },
  { Name: "Rippon Video", Role: "UX Designer", score: "9.2", img: ripponvideo },
  { Name: "Yeasmin Jeo", Role: "UI Designer", score: "9.1", img: yesminjeo },
  { Name: "Adrita kha", Role: "Motion Designer", score: "8.5", img: adritakha },
];

export const TeamData = [
  {
    Name: "David Esoni",
    Role: "SENIOR PROJECT MANAGER",
    dots: dots,
    img: davides,
    email: "davidesoni@gmail.com",
  },
  {
    Name: "Rippon Video",
    Role: "SENIOR UX DESIGNER",
    dots: dots,
    img: ripponv,
    email: "ripponvideo@gmail.com",
  },
  {
    Name: "Yeasmin Jeo",
    Role: "UX UI DESIGNER",
    dots: dots,
    img: yesminj,
    email: "yeasminjeo@gmail.com",
  },
  {
    Name: "Adrita kha",
    Role: "MOTION GRAPHIC DESIGNER",
    dots: dots,
    img: adritak,
    email: "adritakha@gmail.com",
  },
  {
    Name: "Aliqa Macale",
    Role: "SENIOR UI DESIGNER",
    dots: dots,
    img: aliqamacale,
    email: "aliqamacale@gmail.com",
  },
  {
    Name: "Tanimm Hassan",
    Role: "UI DESIGNER",
    dots: dots,
    img: tannimhassan,
    email: "tannimhassan@gmail.com",
  },
  {
    Name: "Julia Roberts",
    Role: "TRAINEE DESIGNER",
    dots: dots,
    img: juliaroberts,
    email: "jularoberts@gmail.com",
  },
  {
    Name: "Julia Rob",
    Role: "TRAINEE DESIGNER",
    dots: dots,
    img: juliarob,
    email: "juliarob@gmail.com",
  },
  {
    Name: "Martin kha",
    Role: "TRAINEE DESIGNER",
    dots: dots,
    img: martinkha,
    email: "martinkha@gmail.com",
  },
];

export const NewProjectData = [
  {
    img: np1,
    title: "App UX Design",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
  {
    img: np2,
    title: "Motion Graphics",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
];
export const WorkInProgressData = [
  {
    img: wp1,
    title: "App UI Design",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
  {
    img: wp2,
    title: "Prototype Design",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
];
export const UnderReviewData = [
  {
    img: ur1,
    title: "Illustration Design",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
  {
    img: ur2,
    title: "App Interaction",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
];
export const CompletedData = [
  {
    img: c1,
    title: "UX Research",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
  {
    img: c2,
    title: "UI Design",
    text: "Food App UX Design and make the right design direction for UI designer",
    icon1: "",
    icon2: "",
    time: "",
  },
];
