import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task: task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo("New Todo")}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
