import styles from "./Footer.module.css";
// eslint-disable-next-line react/prop-types
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span>
        Completed: {completedTodos} / {totalTodos}{" "}
      </span>
    </div>
  );
}
