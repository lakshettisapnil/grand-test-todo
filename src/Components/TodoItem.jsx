import { useState } from "react";
import "../styles/item.css";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = async () => {
    await fetch(`/api/todos?id=${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newText }),
    });

    setIsEditing(false);
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleTodo(todo)}>
          {todo.text}
        </span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={() => deleteTodo(todo.id)}>❌</button>
      </div>
    </div>
  );
}

export default TodoItem;