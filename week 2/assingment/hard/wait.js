const wait = require('C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\assingment\\hard\\promisfy_settimeout.js'); // Assuming your file is in the same directory

wait(10)
    .then(() => {
        console.log('After 3 seconds');
    })
    .catch((error) => {
        console.error('Error:', error);
    });