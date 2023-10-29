import styles from "./TodoItem.module.css";
import { IoMdRemove } from "react-icons/io";
// eslint-disable-next-line react/prop-types
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item:", item);
    //filters out and leaves items that were NOT clicked on
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.name}>
        {item}
        <span>
          <button
            onClick={() => handleDelete()}
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
