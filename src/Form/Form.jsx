import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Form({ todos, setTodos }) {
  //initializing input state variables
  const [input, setInput] = useState("");

  //function prevents refreshing of the page when user presses Add button
  function handleSubmit(e) {
    e.preventDefault();
    //spread operator lets save previous inputs (todos) and create new inputs
    setTodos([...todos, input]);
    //after submitting todo, the input must be empty
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        //now user will be able to type into an input field
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
