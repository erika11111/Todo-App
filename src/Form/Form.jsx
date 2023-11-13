import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, setTodos }) {
  //initializing input state variables
  //const [input, setInput] = useState("");
  //transforming ^ hook function into object, because we need not only save the string but also the state
  const [input, setInput] = useState({ name: "", completed: false });

  //function prevents refreshing of the page when user presses Add button
  function handleSubmit(e) {
    e.preventDefault();
    //spread operator lets save previous inputs (todos) and create new inputs
    setTodos([...todos, input]);
    //after submitting input item, the input must be empty
    setInput({ name: "", completed: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.formInput}
          //now user will be able to type into an input field
          onChange={(e) => setInput({ name: e.target.value, completed: false })}
          value={input.name}
          type="text"
          placeholder="Enter todo item"
        />
        <button className={styles.submitButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
Form.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.array,
};
