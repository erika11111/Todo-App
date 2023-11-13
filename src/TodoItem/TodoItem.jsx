import PropTypes from "prop-types";
import styles from "./TodoItem.module.css";
import { IoMdRemove } from "react-icons/io";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item:", item);
    //filters out and leaves items that were NOT clicked on
    setTodos(todos.filter((input) => input !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((input) =>
        input.name === name ? { ...input, completed: !input.completed } : input
      )
    );
  }
  //if status is completed, the item would be crossed out
  const className = item.completed ? styles.completedItem : "";
  return (
    <div className={styles.item}>
      <div className={styles.name}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            <IoMdRemove role="button" />
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
TodoItem.propTypes = {
  item: PropTypes.string,
  todos: PropTypes.array,
  setTodos: PropTypes.array,
};
