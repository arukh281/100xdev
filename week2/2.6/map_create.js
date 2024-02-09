//create a map function and take 2 input, an aray and a tranfromation callback and transform the array into a new one using the transformation fn

function map(arr,callback){
    newarray=[];
    for(let i =0;i<arr.length;i++){
        newarray.push(callback(arr[i]));
    }
    return newarray
}

let array =[1,2,3,4,5];

// multiply by two

function double(n){
    return n*2;
}
function triple(n){
    return n*3;
}

let doubled_number = map(array,double);
console.log(doubled_number);

console.log();

let tripled = map(array,triple);
console.log(tripled);
