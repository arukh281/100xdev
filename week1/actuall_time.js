function counter(n) {
  if (n === 0) {
    console.log("time-out");
    console.log(`Average time per iteration: ${a / (1000 * 30)} ms`);
  } else {
    // Capture the start time before setTimeout
    const startTime = new Date().getTime();

    setTimeout(function () {
      // Calculate the time elapsed
      const elapsedTime = new Date().getTime() - startTime;

      // Log the elapsed time and call the counter function recursively
      console.log(`Elapsed time: ${elapsedTime} ms`);
      a = a + elapsedTime;

      // Clear console every 500 milliseconds
      setInterval(function () {
        console.clear();
      }, 1000);

      counter(n - 1);
    }, 1000);
  }
}

var a = 0;

// Start the countdown with an initial value of 30
counter(30);
