import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-3 rounded bg-gray-700 text-white focus:outline-none"
      />
      <button className="bg-blue-500 px-4 rounded hover:bg-blue-600 text-white">
        Add
      </button>
    </form>
  );
}

export default TodoInput;
