// 1. Kirat goes open a bank account
// 2. Kirat deposits some money in
// 3. kirat gets back a chequr book from the bank

// *********

// 1. whenver i have to pay someone, i sign the cheque
// 2. everyone can see me check
// 3. people can try to do the same on their cheque book
// 4. bank wont accept theirs, will only accept my cheque

// MY CHECK BOOK = MY JSON WEB TOKEN

const jwt = require("jsonwebtoken");

// decode, verify, generate

const value = {
  user_name: "aru",
  account_no: 123123123,
};
// jwt

const token = jwt.sign(value, "secret");
console.log(token);

// TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhcnUiLCJhY2NvdW50X25vIjoxMjMxMjMxMjMsImlhdCI6MTcwODAwNTczMn0.NVuHQYlovnmLTqSscyS6GMcqy7oNBUCyg8j7Vp9LKT4

// const verify_token = jwt.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhcnUiLCJhY2NvdW50X25vIjoxMjMxMjMxMjMsImlhdCI6MTcwODAwNTczMn0.NVuHQYlovnmLTqSscyS6GMcqy7oNBUCyg8j7Vp9LKT4",
//   "secret"
// );

console.log(verify_token);
