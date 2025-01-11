// Select the element where the date will be displayed
const dateDisplay = document.getElementById("date-display");

// Create a new Date object
const currentDate = new Date();

// Format the date
const formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long", // e.g., Monday
  year: "numeric", // e.g., 2024
  month: "long", // e.g., January
  day: "numeric", // e.g., 11
});

// Format the time
const formattedTime = currentDate.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

// Display the date and time
dateDisplay.textContent = `Today is ${formattedDate}, and the time is ${formattedTime}`;
