import { useState } from "react";
import FormComponent from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
export default function TodoPage() {
  //displaying user entered todos
  const [todos, setTodos] = useState([]);
  //return array with only completed items, and calculate its length
  const completedTodos = todos.filter((item) => item.completed).length;
  const totalTodos = todos.length;
  return (
    <div>
      <FormComponent todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
