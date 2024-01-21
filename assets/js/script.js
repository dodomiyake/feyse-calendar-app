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
      var hourColumn = $("<div>").addClass("col-md-1 hour").text(hour + ":00 AM");
      var eventColumn = $("<textarea>").addClass("col-md-10 description");
  
      // Create save button
      var saveBtn = $("<button>").addClass("col-md-1 saveBtn").html('<i class="fas fa-save"></i>');

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
  

  
  // Call functions to initialize the app
  setInterval(displayTime, 1000);
  createTimeblocks();
 
  