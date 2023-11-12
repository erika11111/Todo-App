import styles from "./TodoItem.module.css";
import { IoMdRemove } from "react-icons/io";
// eslint-disable-next-line react/prop-types
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item:", item);
    //filters out and leaves items that were NOT clicked on
    // eslint-disable-next-line react/prop-types
    setTodos(todos.filter((input) => input !== item));
  }
  function handleClick(name) {
    setTodos(
      // eslint-disable-next-line react/prop-types
      todos.map((input) =>
        input.name === name ? { ...input, completed: !input.completed } : input
      )
    );
  }
  //if status is completed, the item would be crossed out
  // eslint-disable-next-line react/prop-types
  const className = item.completed ? styles.completedItem : "";
  return (
    <div className={styles.item}>
      <div className={styles.name}>
        {/*eslint-disable-next-line react/prop-types*/}
        <span className={className} onClick={() => handleClick(item.name)}>
          {/* eslint-disable-next-line react/prop-types*/}
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
