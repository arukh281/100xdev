function square(a) {
  return a * a;
}
function cube(a) {
  return a * a * a;
}
function quad(a) {
  return a * a * a * a;
}

function sumofsomething(a, b, fn) {
  return fn(a) + fn(b);
}

var ans = sumofsomething(3, 6, square);
console.log(ans);
ans = sumofsomething(3, 6, cube);
console.log(ans);
ans = sumofsomething(3, 6, quad);
console.log(ans);
