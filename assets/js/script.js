// DOM Elements
var currentDayEl = $("#currentDay")



// Display current time function
function displayTime() {
    var rightNow = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
  }












  setInterval(displayTime, 1000);


