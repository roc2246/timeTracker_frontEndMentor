//DOM Manipulation
const card = document.querySelectorAll(".main-box, .metric");
const metricStateChange = document.getElementsByClassName(
  "metric-state-change"
)[0];
const mainBox = card[0];

const displayWindowSize = () => {
  if (mainBox.clientWidth <= 256) {
    metricStateChange.style.width = "25%";
  } else {
    metricStateChange.style.width = "inherit";
  }
};

window.addEventListener("resize", displayWindowSize);

displayWindowSize();

//Fetch data
const activities = document.getElementsByClassName("activity");
const time = document.getElementsByClassName("time--amount");
const prevTime = document.getElementsByClassName("previous-metric--metric");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((activity) => {
      activities[activity].innerHTML = data[activity].title;
      time[activity].innerHTML = data[activity].timeframes.weekly.current;
      prevTime[activity].innerHTML = data[activity].timeframes.weekly.previous;
    });
  });
