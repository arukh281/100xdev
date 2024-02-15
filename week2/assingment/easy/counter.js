// Initialize counter variable
let count = 0;

// Function to update the counter and display it
function updateCounter() {
  count++;
  console.log(count); // You can replace this with the logic to update your UI
}

// Set interval to call the updateCounter function every second (1000 milliseconds)
setInterval(updateCounter, 1000);
