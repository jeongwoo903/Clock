const container = document.querySelector(".container");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const dayNum = document.querySelector(".day-num");
const dayName = document.querySelector(".day-name");
const hoursTime = document.querySelector(".hours-time");
const time = document.querySelector(".time");
const amPm = document.querySelector(".am-pm");
let amPmIdent = null;

if (hoursTime <= 12) {
  amPmIdent = "A.M.";
} else {
  amPmIdent = "P.M.";
}

function refreshDay() {
  let currentTime = new Date();
  year.innerHTML = currentTime.getFullYear();
  month.innerHTML = currentTime.getMonth() + 1;
  setTimeout(refreshDay, 60000);
}

function refreshTime() {
  let currentTime = new Date();
  hoursTime.innerHTML = currentTime.getHours();
  amPm.innerHTML = amPmIdent;
  time.innerHTML = currentTime.getMinutes() + " : " + currentTime.getSeconds();
  dayNum.innerHTML = currentTime.getDate();
  let dayNameIdent = currentTime.getDay();
  switch (dayNameIdent) {
    case 0:
      dayName.innerHTML = "Sun";
      dayName.style.color = "#ff6347";
      dayName.style.backgroundColor = "#ffee00";
      break;
    case 1:
      dayName.innerHTML = "Mon";
      dayName.style.backgroundColor = "#f8cc46";
      break;
    case 2:
      dayName.innerHTML = "Tue";
      dayName.style.backgroundColor = "#eb4996";
      break;
    case 3:
      dayName.innerHTML = "Wed";
      dayName.style.backgroundColor = "#ee642d";
      break;
    case 4:
      dayName.innerHTML = "Thu";
      dayName.style.backgroundColor = "#5cc739";
      break;
    case 5:
      dayName.innerHTML = "Fri";
      dayName.style.backgroundColor = "#fac4cd";
      break;
    case 6:
      dayName.innerHTML = "Sat";
      dayName.style.color = "#4a47ff";
      dayName.style.backgroundColor = "#ff6600";
      break;
  }
  setTimeout(refreshTime, 1000);
}
