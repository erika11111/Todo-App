import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
// eslint-disable-next-line react/prop-types
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {
        // eslint-disable-next-line react/prop-types
        todos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      }
    </div>
  );
}
