let todos = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(todos);
  }

  if (req.method === "POST") {
    const { text } = req.body;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    todos.push(newTodo);
    return res.status(201).json(newTodo);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    todos = todos.filter((t) => t.id != id);

    return res.status(200).json({ message: "deleted" });
  }

  if (req.method === "PATCH") {
  const { id } = req.query;
  const { text } = req.body;

  todos = todos.map((t) =>
    t.id == id
      ? { ...t, text: text ?? t.text, completed: t.completed }
      : t
  );

  return res.status(200).json({ message: "updated" });
}

  return res.status(405).json({ message: "Method not allowed" });
}