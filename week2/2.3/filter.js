// what if i tell you, givan an inout array, give me back all th even values from it

const arr = [1, 2, 3, 4, 5];

const newarr = [];
for (let i; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newarr.push(arr[i]);
  }
}

function filterlogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(newarr);
