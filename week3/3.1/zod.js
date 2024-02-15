const zod = require("zod");

function validationinput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const validationResult = schema.safeParse(obj);
  console.log(validationResult);
}

validationinput({
  email: "aru@gmal.com",
  password: "12345668",
});
