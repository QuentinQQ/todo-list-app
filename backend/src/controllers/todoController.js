const ToDo = require('../models/todoModel');

exports.getToDos = async (req, res) => {
  const todos = await ToDo.find({ userId: req.user.id });
  res.json(todos);
};

exports.createToDo = async (req, res) => {
  const { title, description } = req.body;
  const todo = await ToDo.create({ userId: req.user.id, title, description });
  res.status(201).json(todo);
};

exports.updateToDo = async (req, res) => {
  const { id } = req.params;
  const updatedToDo = await ToDo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedToDo);
};

exports.deleteToDo = async (req, res) => {
  const { id } = req.params;
  await ToDo.findByIdAndDelete(id);
  res.status(204).send();
};
