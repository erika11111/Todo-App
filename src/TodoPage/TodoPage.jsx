import { useState } from "react";
import FormComponent from "../Form/Form";
import TodoList from "../TodoList/TodoList";
export default function TodoPage() {
  //displaying user enterd todos
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <FormComponent todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
