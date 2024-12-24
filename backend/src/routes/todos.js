const express = require('express');
const { createToDo, getToDos, updateToDo, deleteToDo } = require('../controllers/todoController');
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateUser, getToDos);
router.post('/', authenticateUser, createToDo);
router.put('/:id', authenticateUser, updateToDo);
router.delete('/:id', authenticateUser, deleteToDo);

module.exports = router;
