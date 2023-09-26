import styles from "./TodoItem.module.css";
// eslint-disable-next-line react/prop-types
export default function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.name}>{item}</h3>
      <hr className={styles.line} />
    </div>
  );
}
