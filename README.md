# Copilot Todo API

A RESTful Todo API built with Node.js and Express.

## Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## Installation

```bash
npm install
```

## Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

### General
- `GET /` - Welcome message and API information
- `GET /health` - Health check endpoint

### Todo Management
- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo by ID
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## API Examples

### Create a Todo
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "description": "Milk, eggs, bread"}'
```

### Get All Todos
```bash
curl http://localhost:3000/api/todos
```

### Get a Single Todo
```bash
curl http://localhost:3000/api/todos/1
```

### Update a Todo
```bash
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "completed": true}'
```

### Delete a Todo
```bash
curl -X DELETE http://localhost:3000/api/todos/1
```

## Todo Object Structure

```json
{
  "id": 1,
  "title": "Todo title",
  "description": "Optional description",
  "completed": false,
  "createdAt": "2026-01-03T12:00:00.000Z",
  "updatedAt": "2026-01-03T12:00:00.000Z"
}
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## License

ISC