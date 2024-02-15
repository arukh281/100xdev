// given an inout array, give me back all the even vales from it.

const arr = [1, 2, 3, 4, 5];

// const newarray=[];

// for(let i =0; i<arr.length;i++){
//     if (arr[i]%2===0){
//         newarray.push(arr[i]);
//     }
// }

// console.log(newarray);

//*******************another solution ***************8

function filteringlogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans = arr.filter(filteringlogic);
console.log(ans);
