let todos = [];
let nextId = 1;

const getAllTodos = () => {
  return todos;
};

const getTodoById = (id) => {
  return todos.find(todo => todo.id === parseInt(id));
};

const createTodo = (todoData) => {
  const newTodo = {
    id: nextId++,
    title: todoData.title,
    description: todoData.description || '',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  todos.push(newTodo);
  return newTodo;
};

const updateTodo = (id, todoData) => {
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) return null;

  todos[index] = {
    ...todos[index],
    ...todoData,
    id: todos[index].id,
    createdAt: todos[index].createdAt,
    updatedAt: new Date().toISOString()
  };
  return todos[index];
};

const deleteTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) return null;

  const deletedTodo = todos[index];
  todos.splice(index, 1);
  return deletedTodo;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
