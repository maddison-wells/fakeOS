// nav time
const current = new Date();

function getNavTime() {
  const current = new Date();
  let minutes = (current.getMinutes() < 10 ? "0" : "") + current.getMinutes();
  let time = `${current.getHours()}:${minutes}`;
  document.getElementById("navTime").innerHTML = time;
}

getNavTime();
setInterval(getNavTime, 1000);

//lockscreen time

function getLockTime() {
  const current = new Date();
  let minutes = (current.getMinutes() < 10 ? "0" : "") + current.getMinutes();
  let time = `${current.getHours()}:${minutes}`;
  document.getElementById("lockTime").innerHTML = time;
}
getLockTime();
setInterval(getLockTime, 1000);

//lockscreen date

function getDayName() {
  const current = new Date();
  let day = current.getDay();
  let dayName;

  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
      break;
  }

  return dayName;
}

function getMonthName() {
  const current = new Date();
  let month = current.getMonth();
  let monthName;

  switch (month) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
    default:
      monthName = "Invalid month";
      break;
  }

  return monthName;
}
document.getElementById(
  "lockDate"
).innerHTML = `${getDayName()}, ${current.getDate()} ${getMonthName()} `;

// clickToOpen

document.getElementById("lockScreen").addEventListener("click", function () {
  let element = document.getElementById("lockScreen");
  let show = document.getElementById("firstPage");
  element.classList.add("hide");
  show.classList.remove("hide");
});

// document.getElementById("firstPage").addEventListener("click", function () {
//   let element = document.getElementById("firstPage");
//   element.classList.remove("hide");
// });
