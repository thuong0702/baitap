import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentInfoComponent from "./components/StudentInfoComponent";
import TodoList from "./components/TodoList";
import Counters from "./components/Counters";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Menu điều hướng */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Student Info</Link>
          <Link to="/todolist" style={{ marginRight: "10px" }}>Todo List</Link>
          <Link to="/counters">Counters</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<StudentInfoComponent />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/counters" element={<Counters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
