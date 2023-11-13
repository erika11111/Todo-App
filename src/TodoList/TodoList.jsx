import PropTypes from "prop-types";
import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    //slice method created a copy of an array
    .slice()
    //completed items are on one side and incompleted on other - and sorted in an ascending order (a-b)
    .sort((a, b) => Number(a.completed) - Number(b.completed));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.array,
};
