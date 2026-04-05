import { Link } from "react-router-dom";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow">
      <Link
        to={`/tasks/${todo.id}`}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : "text-white"
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </Link>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
