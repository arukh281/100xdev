const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailschema.safeParse(username);
  const passwordResponse = passwordschema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

function verifyJwt(token) {
  try {
    const verified = jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    ans = false;
  }
  return false;
}

function decodeJwt(token) {
  // true/false
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
