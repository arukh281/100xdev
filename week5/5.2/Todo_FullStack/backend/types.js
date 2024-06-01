const zod = require("zod");

/*

    {
        title: string,
        desription: string
    }
    {
        id:string
    }

*/

const createtodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});
const updatetodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createtodo: createtodo,
  updatetodo: updatetodo,
};
