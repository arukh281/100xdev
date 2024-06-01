const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const word = token.split(" ");
  const jwttoken = word[1];
  const decodedvalue = jwt.verify(jwttoken, JWT_SECRET);
  if (decodedvalue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "msg are not authenticated",
    });
  }
}

module.exports = userMiddleware;
