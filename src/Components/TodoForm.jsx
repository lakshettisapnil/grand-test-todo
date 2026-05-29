import { useState } from "react";
import "../styles/form.css";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;