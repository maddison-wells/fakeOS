// time

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

// Store original content
let originalContent = document.getElementById("firstPage").innerHTML;

// Function to show a specific content by ID
function showContent(contentId) {
  document.querySelectorAll(".page-content").forEach(function (content) {
    content.classList.add("hide");
  });
  document.getElementById(contentId).classList.remove("hide");
}

// Click event for magicEight
document.getElementById("magicEight").addEventListener("click", function () {
  // Store the current content as original when entering the magic 8 app
  originalContent = document.getElementById("firstPage").innerHTML;

  // Show the magicEight content
  showContent("magicEightContent");
});

// Click event for returning to main page
document
  .getElementById("firstPage")
  .addEventListener("click", function (event) {
    // Check if the clicked element is the one with the id "returnToMain"
    if (event.target.id === "returnToMain") {
      // Restore the original content when returning to the main page
      document.getElementById("firstPage").innerHTML = originalContent;

      // Reattach event listeners
      attachEventListeners();

      document
        .getElementById("iphoneMain")
        .classList.remove("addMagicBackground");
    }
  });

// Attach event listeners function
function attachEventListeners() {
  // Slide between page 1 and 2
  document
    .getElementById("pageToggleFirst")
    .addEventListener("click", function () {
      showContent("firstPage");
    });

  document
    .getElementById("pageToggleSecond")
    .addEventListener("click", function () {
      showContent("secondPage");
    });

  // Page toggle
  document.getElementById("newPage").addEventListener("click", function () {
    showContent("noteEdit");
  });

  document.getElementById("returnHome").addEventListener("click", function () {
    showContent("homepage");
  });

  // Add any other event listeners you need to reattach...
}

// Attach event listeners on page load
attachEventListeners();
