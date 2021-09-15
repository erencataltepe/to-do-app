import React from "react";
import Footer from "./Footer";

function List({ todoList }) {
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
                  <input className="toggle" type="checkbox" />
                  <label>{todo.todoText}</label>
                  <button className="destroy"></button>
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
