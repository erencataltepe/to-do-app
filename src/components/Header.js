import React from "react";

function Header({ todo, handleTodoText, addNewItem }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addNewItem}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={todo.todoText}
          onChange={handleTodoText}
          name="todoText"
        />
      </form>
    </header>
  );
}

export default Header;
