const card = document.querySelectorAll(".main-box, .metric");
const metricStateChange = document.getElementsByClassName("metric-state-change")[0]
const mainBox = card[0]
    
const displayWindowSize = () => {

    if(mainBox.clientWidth <= 256){
        metricStateChange.style.width = "25%";
    } else {
        metricStateChange.style.width = 'inherit';
    }

}
    
window.addEventListener("resize", displayWindowSize);

displayWindowSize();