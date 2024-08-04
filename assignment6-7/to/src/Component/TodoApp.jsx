// TodoApp.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Todo List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button className="btn btn-danger btn-sm" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
