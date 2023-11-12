import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
// eslint-disable-next-line react/prop-types
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    //slice method created a copy of an array
    // eslint-disable-next-line react/prop-types
    .slice()
    //completed items are on one side and incompleted on other - and sorted in an ascending order (a-b)
    .sort((a, b) => Number(a.completed) - Number(b.completed));
  return (
    <div className={styles.list}>
      {
        // eslint-disable-next-line react/prop-types
        sortedTodos.map((item) => (
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
