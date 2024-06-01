const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://arukhandelwal281:FcromRQQNBxmlLuU@cluster0.ayyjrqz.mongodb.net/todo_app"
);

const todoschema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoschema);
// in this example, todoschema defines a schema with title and completed fields, and todo is the model that allows you to perform CRUD operations on the 'todos' collection in MongoDB.

module.exports = {
  todo,
};
