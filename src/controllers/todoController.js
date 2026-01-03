const todoData = require('../data/todos');

const getAllTodos = (req, res) => {
  const todos = todoData.getAllTodos();
  res.json({
    success: true,
    count: todos.length,
    data: todos
  });
};

const getTodo = (req, res) => {
  const todo = todoData.getTodoById(req.params.id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  res.json({
    success: true,
    data: todo
  });
};

const createTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      error: 'Title is required'
    });
  }

  const todo = todoData.createTodo({ title, description });
  res.status(201).json({
    success: true,
    data: todo
  });
};

const updateTodo = (req, res) => {
  const todo = todoData.updateTodo(req.params.id, req.body);
  if (!todo) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  res.json({
    success: true,
    data: todo
  });
};

const deleteTodo = (req, res) => {
  const todo = todoData.deleteTodo(req.params.id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  res.json({
    success: true,
    data: todo
  });
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};
