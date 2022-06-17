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
const stateSelector = document.getElementsByClassName("metric-state-change__category")

const assignDataMonthly = (data) => {
  Object.keys(data).forEach((activity) => {
    activities[activity].innerHTML = data[activity].title;
    time[activity].innerHTML = data[activity].timeframes.monthly.current;
    prevTime[activity].innerHTML = data[activity].timeframes.monthly.previous;
  });
}

const assignDataWeekly = (data) => {
  Object.keys(data).forEach((activity) => {
    activities[activity].innerHTML = data[activity].title;
    time[activity].innerHTML = data[activity].timeframes.weekly.current;
    prevTime[activity].innerHTML = data[activity].timeframes.weekly.previous;
  });
}

const assignDataDaily = (data) => {
  Object.keys(data).forEach((activity) => {
    activities[activity].innerHTML = data[activity].title;
    time[activity].innerHTML = data[activity].timeframes.daily.current;
    prevTime[activity].innerHTML = data[activity].timeframes.daily.previous;
  });
}

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    assignDataWeekly(data);
    stateSelector[1].style.color = "white"
      stateSelector[0].addEventListener("click", () => {
        Object.keys(stateSelector).forEach(state => {
          stateSelector[state].style.color = "hsl(236, 100%, 87%)"
        })
        assignDataDaily(data)
        stateSelector[0].style.color = "white"
      })
      stateSelector[1].addEventListener("click", () => {
        Object.keys(stateSelector).forEach(state => {
          stateSelector[state].style.color = "hsl(236, 100%, 87%)"
        })
        assignDataWeekly(data)
        stateSelector[1].style.color = "white"
      })
      stateSelector[2].addEventListener("click", () => {
        Object.keys(stateSelector).forEach(state => {
          stateSelector[state].style.color = "hsl(236, 100%, 87%)"
        })
        assignDataMonthly(data)
        stateSelector[2].style.color = "white"
      })
  });
