const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Copilot Todo API',
    status: 'running',
    version: '1.0.0',
    endpoints: {
      todos: '/api/todos',
      health: '/health'
    },
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
