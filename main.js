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

  setTimeout(() => {
    document.getElementById("mainLock").innerHTML =
      '<i class="fa-solid fa-lock-open"></i>';
  }, 100);

  setTimeout(() => {
    element.classList.add("hide");

    show.classList.remove("hide");
  }, 800);
});

// // slide between page 1 and 2

document
  .getElementById("pageToggleFirst")
  .addEventListener("click", function () {
    let pageOne = document.getElementById("firstPage");
    let pageTwo = document.getElementById("secondPage");

    pageOne.classList.toggle("hide");
    pageTwo.classList.toggle("hide");
  });

document
  .getElementById("pageToggleSecond")
  .addEventListener("click", function () {
    let pageOne = document.getElementById("firstPage");
    let pageTwo = document.getElementById("secondPage");

    pageOne.classList.toggle("hide");
    pageTwo.classList.toggle("hide");
  });

//.savedNotes inner HTML needs to change once Done is pressed saveNote()

let title = document.getElementById("inputTitle");
let text = document.getElementById("inputText");
let savedNotes = document.getElementById("savedNotes");

function addNewDiv() {
  savedNotes.classList.remove("hide");

  let newDiv = document.createElement("div");
  let truncatedText =
    text.value.length > 30 ? text.value.substring(0, 30) + "..." : text.value;

  newDiv.innerHTML = `<h2>${title.value}</h2><p>${truncatedText}</p>`;
  newDiv.classList.add("customDiv");
  document.getElementById("savedNotes").appendChild(newDiv);
}

// // document.getElementById("doneButton").addEventListener("click", addNewDiv);

document.getElementById("doneButton").addEventListener("click", function () {
  addNewDiv();
  document.getElementById("inputTitle").value = "";
  document.getElementById("inputText").value = "";
});

// // page toggle

document.getElementById("newPage").addEventListener("click", function () {
  let pageOne = document.getElementById("homepage");
  let pageTwo = document.getElementById("noteEdit");

  pageTwo.classList.remove("hide");
  pageOne.classList.add("hide");
});

document.getElementById("returnHome").addEventListener("click", function () {
  let pageOne = document.getElementById("homepage");
  let pageTwo = document.getElementById("noteEdit");

  pageTwo.classList.add("hide");
  pageOne.classList.remove("hide");
});

// // Timer
document.getElementById("stopwatchApp").addEventListener("click", function () {
  firstPage.classList.add("hide");
  document.getElementById("iphoneMain").classList.add("addStopWatchBackground");

  document.getElementById("stopWatchContent").classList.remove("hide");
});

document
  .getElementById("returnToFirstPage")
  .addEventListener("click", function () {
    firstPage.classList.remove("hide");
    document
      .getElementById("iphoneMain")
      .classList.remove("addStopWatchBackground");

    document.getElementById("stopWatchContent").classList.add("hide");
  });

var sec = 0;
var intervalId;
function timer(value) {
  return value > 9 ? value : "0" + value;
}

function updateTimer() {
  document.getElementById("seconds").innerHTML = timer(++sec % 60);
  document.getElementById("minutes").innerHTML = timer(parseInt(sec / 60, 10));
}

document.getElementById("play").addEventListener("click", function () {
  var playButton = document.getElementById("play");
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
    playButton.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
  } else {
    clearInterval(intervalId);
    intervalId = null;
    playButton.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
  }
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  sec = 0;
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
});

document.getElementById("magicEight").addEventListener("click", function () {
  firstPage.classList.add("hide");
  document.getElementById("iphoneMain").classList.add("addMagicBackground");
  document.getElementById("magicEightContent").classList.remove("hide");
});

function getMagic8BallResponse() {
  const randomValue = Math.floor(Math.random() * 14) + 1;
  let response;

  switch (randomValue) {
    case 1:
      response = "Yes, definitely";
      break;
    case 2:
      response = "No, never";
      break;
    case 3:
      response = "Ask again later";
      break;
    case 4:
      response = "Cannot predict now";
      break;
    case 5:
      response = "Don't count on it";
      break;
    case 6:
      response = "You may rely on it";
      break;
    case 7:
      response = "As I see it, yes.";
      break;
    case 8:
      response = "Outlook not so good";
      break;
    case 9:
      response = "Most likely";
      break;
    case 10:
      response = "Reply hazy, try again";
      break;
    case 11:
      response = "Without a doubt";
      break;
    case 12:
      response = "My sources say no";
      break;
    case 13:
      response = "Yes, in due time";
      break;
    case 14:
      response = "Very doubtful";
      break;
    default:
      response = "Invalid number. Try 1 to 14.";
  }

  const image = document.getElementById("shakingImage");

  image.classList.remove("shake");
  void image.offsetWidth;
  image.classList.add("shake");

  setTimeout(() => {
    image.classList.remove("shake");
    document.getElementById("fortuneText").innerHTML = response;
  }, 200);
}
// magic8 functionality
document.getElementById("fortuneText").addEventListener("click", function () {
  getMagic8BallResponse();
});

document.getElementById("returnToMain").addEventListener("click", function () {
  firstPage.classList.remove("hide");
  document.getElementById("iphoneMain").classList.remove("addMagicBackground");
  document.getElementById("magicEightContent").classList.add("hide");
});
