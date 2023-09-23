import { useState } from "react";

export default function InputComponent() {
  //initializing input state variables
  const [input, setInput] = useState("");
  //function prevents refreshing of the page when user presses Add button
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          //now user will be able to type into an input field
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
