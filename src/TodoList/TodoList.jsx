import TodoItem from "../TodoItem/TodoItem";
// eslint-disable-next-line react/prop-types
export default function TodoList({ todos }) {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))
      }
    </div>
  );
}
