import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

function Tasks() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos =
    filter === "completed"
      ? todos.filter((t) => t.completed)
      : filter === "pending"
        ? todos.filter((t) => !t.completed)
        : todos;

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-xl bg-gray-900 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl text-white text-center mb-4">Tasks</h1>

        <TodoInput addTodo={addTodo} />

        {/* Filters */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded ${
              filter === "all" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded ${
              filter === "completed" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1 rounded ${
              filter === "pending" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            Pending
          </button>
        </div>

        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default Tasks;
