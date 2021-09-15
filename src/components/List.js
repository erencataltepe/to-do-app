import React from "react";
import Footer from "./Footer";

function List({ todoList, removeTodoItem, toggleCheckStatus }) {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todoList.map((todo, id) => {
            const isVisible = todo.isCompleted ? "completed" : "uncompleted";
            return (
              <li key={id} className={isVisible}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    data-key={id}
                    onClick={toggleCheckStatus}
                  />
                  <label>{todo.todoText}</label>
                  <button
                    className="destroy"
                    data-key={id}
                    onClick={removeTodoItem}
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default List;
