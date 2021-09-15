import React from "react";

function Footer({ todoList }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todoList.filter((todo) => todo.isCompleted !== true).length}
        </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" href="#">
            All
          </a>
        </li>
        <li>
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
