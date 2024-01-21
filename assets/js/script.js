// Function to display the current day at the top of the calendar
function displayTime() {
  var rightNow = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(rightNow);
}

// Function to create timeblocks for standard business hours
function createTimeblocks() {
  var container = $(".container");

  // Loop through hours (assuming 9 AM to 5 PM)
  for (var hour = 9; hour <= 17; hour++) {
    // Create elements for timeblock
    var timeblock = $("<div>").addClass("row time-block");
    var formattedHour = formatHour(hour);
    var hourColumn = $("<div>").addClass("col-md-1 hour").text(formattedHour);
    var eventColumn = $("<textarea>").addClass("col-md-10 description");

    // Create save button
    var saveBtn = $("<button>")
      .addClass("col-md-1 saveBtn")
      .html('<i class="fas fa-save"></i>');

    // Set background color based on past, present, or future
    var currentHour = dayjs().hour();
    if (hour < currentHour) {
      eventColumn.addClass("past");
    } else if (hour === currentHour) {
      eventColumn.addClass("present");
    } else {
      eventColumn.addClass("future");
    }

    // Append elements to timeblock
    timeblock.append(hourColumn, eventColumn, saveBtn);

    // Append timeblock to container
    container.append(timeblock);
  }
}

// Function to convert to 12hr format
function formatHour(hour) {
  if (hour === 12) {
    return "12:00 PM";
  } else if (hour > 12) {
    return hour - 12 + ":00 PM";
  } else {
    return hour + ":00 AM";
  }
}

// Function to handle saving events to local storage
function saveEvent() {
  var timeblock = $(this).closest(".time-block");
  var hour = timeblock.find(".hour").text(); // The hour is already in the correct format
  var event = timeblock.find(".description").val();

  // Save to local storage
  localStorage.setItem(hour, event);
}

// Function to load events from local storage
function loadEvents() {
  $(".time-block").each(function () {
    var hour = $(this).find(".hour").text();
    var savedEvent = localStorage.getItem(hour);

    if (savedEvent) {
      $(this).find(".description").val(savedEvent);
    }
  });
}

// Event listener for save button
$(".container").on("click", ".saveBtn", saveEvent);

// Add margin top to the container
$(".container").css("margin-top", "30px");

// Call functions to initialize the app
setInterval(displayTime, 1000);
createTimeblocks();
loadEvents();


