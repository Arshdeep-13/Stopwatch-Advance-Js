let timeContainer = document.querySelector(".container").firstElementChild;
let start = document.querySelector("#start");
let lap = document.querySelector("#lap");
let list = document.createElement("ol");
let outputDiv = document.querySelector(".outputDiv");

let IntervalId;
let seconds = 0, minutes = 0, hours = 0;
const TimeInterval = () => {
    IntervalId = setInterval(() => {
        if (seconds >= 60) {
            seconds = 0;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            else {
                minutes++;
            }
        }
        else {
            seconds++;
        }
        // seconds = (seconds > 60) ? 0 : seconds;
        // minutes = (minutes > 60) ? 0 : minutes++;
        // hours = (hours > 12) ? 0 : hours++;
        seconds = (seconds.toString().length == 1) ? "0" + seconds : seconds;
        // console.log(seconds);
        minutes = (minutes.toString().length == 1) ? "0" + minutes : minutes;
        // console.log(minutes);
        hours = (hours.toString().length == 1) ? "0" + hours : hours;
        // console.log(hours);
        let ans = `${hours}:${minutes}:${seconds}`;
        timeContainer.innerHTML = ans;
    }, 10)
}

start.addEventListener("click", () => {
    if (start.innerHTML == "Start") {
        TimeInterval();
        start.innerHTML = "Stop";
        lap.innerHTML = "Lap";
    }
    else {
        clearInterval(IntervalId);
        start.innerHTML = "Start";
        lap.innerHTML = "Reset";
    }
});

const PickInterval = () => {
    let li = document.createElement("li");
    li.innerHTML = `${hours}:${minutes}:${seconds}`;
    list.appendChild(li);
    li.setAttribute("class", "glowing-btn"); 
    outputDiv.appendChild(list);
}

lap.addEventListener("click", () => {
    if (lap.innerHTML == "Lap") {
        PickInterval();
    }
    else {
        timeContainer.innerHTML = "00:00:00";
        seconds = 0, minutes = 0, hours = 0;
        list.innerHTML = ''
        list.style.height = "auto"
        list.style.padding = "auto"
    }
})