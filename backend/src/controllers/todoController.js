const ToDo = require('../models/todoModel');

exports.getToDos = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
  
      const todos = await ToDo.find({ userId: req.user.id })
        .sort({ createdAt: -1 }) // Sort by createdAt in descending order
        .skip((page - 1) * limit)
        .limit(Number(limit));
  
      res.json(todos);
    } catch (error) {
      console.error('Error fetching ToDos:', error);
      res.status(500).json({ error: 'Failed to fetch tasks.' });
    }
  };
  

exports.createToDo = async (req, res) => {
    try {
      const { title, notes } = req.body;
  
      // verification
      if (!title || title.length > 50) {
        return res.status(400).json({ error: 'Title is required and should be less than 50 characters.' });
      }
      
      const todo = await ToDo.create({
        userId: req.user.id,
        title,
        notes: notes || '',
      });
  
      res.status(201).json(todo);
    } catch (error) {
      console.error('Error creating ToDo:', error);
      res.status(500).json({ error: 'Failed to create task.' });
    }
  };
  

  exports.updateToDo = async (req, res) => {
    try {
      const { id } = req.params; // id is Todo ID, not User ID
      const { title, notes, isCompleted } = req.body;
  
      // Verification
      if (title && title.length > 50) {
        return res.status(400).json({ error: 'Title should be less than 50 characters.' });
      }
  
      const todo = await ToDo.findById(id);
  
      if (!todo) {
        return res.status(404).json({ error: 'Task not found.' });
      }
  
      // Update
      todo.title = title || todo.title;
      todo.notes = notes || todo.notes;
      todo.isCompleted = isCompleted !== undefined ? isCompleted : todo.isCompleted;
  
      if (todo.isCompleted && !todo.completedAt) {
        todo.completedAt = Date.now();
      } else if (!todo.isCompleted) {
        todo.completedAt = null;
      }
  
      const updatedToDo = await todo.save();
      res.json(updatedToDo);
    } catch (error) {
      console.error('Error updating ToDo:', error);
      res.status(500).json({ error: 'Failed to update task.' });
    }
  };
  

  exports.deleteToDo = async (req, res) => {
    try {
      const { id } = req.params;
  
      const todo = await ToDo.findById(id);
  
      if (!todo) {
        return res.status(404).json({ error: 'Task not found.' });
      }
  
      await todo.deleteOne();
      res.status(204).send("Task deleted successfully.");
    } catch (error) {
      console.error('Error deleting ToDo:', error);
      res.status(500).json({ error: 'Failed to delete task.' });
    }
  };
  