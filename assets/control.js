// Get the timer elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Set the target date for the countdown
const TheReturn = new Date('Iunie 17, 2024 08:00:00').getTime();

// Start the timer
function startTimer() {
  setInterval(updateTimer, 1000); // Update every 1 second (1000 milliseconds)
}

// Update the timer
function updateTimer() {
  const now = new Date().getTime();
  const timeRemaining = TheReturn - now;

  // Check if the target date has passed
  if (timeRemaining < 0) {
    daysElement.textContent = '0';
    hoursElement.textContent = '0';
    minutesElement.textContent = '0';
    secondsElement.textContent = '0';
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the timer elements
  daysElement.textContent = days;
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}

// Helper function to format time values
function formatTime(value) {
  return value < 10 ? '0' + value : value;
}

// Start the timer
startTimer();
