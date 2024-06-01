const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const PORT = 3000;

// Dummy imports (replace with actual implementations)
const { updatetodo, createtodo } = require("./types"); // Replace with actual validation schemas
const { todo } = require("./db"); // Replace with actual Mongoose model

const cors = require("cors");
app.use(cors());

// GET route to fetch all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching todos", error });
  }
});

// POST route to create a new todo
app.post("/todos", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createtodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    return res.status(411).json({ msg: "You have entered wrong inputs" });
  }

  try {
    await todo.create({
      title: createPayLoad.title,
      description: createPayLoad.description,
      completed: false,
    });
    res.json({ msg: "Todo Created" });
  } catch (error) {
    res.status(500).json({ msg: "Error creating todo", error });
  }
});

// PUT route to mark a todo as completed
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayLoad = updatetodo.safeParse(updatePayload);
  if (!parsedPayLoad.success) {
    return res.status(411).json({ msg: "You have entered wrong inputs" });
  }

  try {
    await todo.updateOne(
      {
        _id: updatePayload.id,
      },
      {
        completed: true,
      }
    );

    res.json({ msg: "Todo marked as completed" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating todo", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
