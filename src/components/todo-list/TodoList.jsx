import "./todolist.css";
import Todos from "../todos/Todos";
import { useState } from "react";

const TodoList = () => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div id="Todos-main">
      {/* <div id="theme-toggle">
            <input type="checkbox" id="theme-toggle-checkbox" />
            <label htmlFor="theme-toggle-checkbox" id="theme-toggle-label">
                <span id="theme-toggle-inner"></span>
                <span id="theme-toggle-switch"></span>
            </label>
        </div> */}
      <h1>Todo List</h1>
      <span id="input" className={isInputFocused ? "focused" : ""}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="text"
          placeholder="Add todo"
        />
        <button id="add-btn">Add</button>
      </span>
      <Todos />
    </div>
  );
};

export default TodoList;
