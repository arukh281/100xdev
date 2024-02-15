// promisfy this asyn fucntion

function myownsettimeout(callback, duration) {
  setTimeout(callback, duration);
}
function promisfiesmyownsettimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return p;
}
//this is hoe you call a function and how do you give a call back.
const ans = promisfiesmyownsettimeout(1000);
ans.then(function () {
  console.log("time out");
});

// myownsettimeout(function(){
//     console.log("sfter settimeouyt")
// },1000)
