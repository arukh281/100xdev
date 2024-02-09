function clock(n) {
    if (n === 0) {
        console.log("time-out");
    } else {
        console.log(n);
        setTimeout(function () {
            clock(n - 1);
        }, 1000);
    }
}

// Start the countdown with an initial value of 30
clock(30);
