import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // GET todos khi vào trang
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Submit todo
  const handleSubmit = () => {
    if (!task.trim()) {
      alert("Please enter todo task");
      return;
    }

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: task,
        completed: false,
      })
      .then((response) => {
        alert("Status: " + response.status);
        setTodos([response.data, ...todos]);
        setTask("");
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter todo task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
