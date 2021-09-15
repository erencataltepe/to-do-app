import React from "react";

function List({ todoList, removeTodoItem, toggleCheckStatus }) {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todoList.map((todo) => {
            const isVisible = todo.isCompleted ? "completed" : "uncompleted";
            return (
              <li key={todo.id} className={isVisible}>
                <div className="view">
                  {todo.isCompleted ? (
                    <input
                      className="toggle"
                      type="checkbox"
                      data-key={todo.id}
                      onChange={toggleCheckStatus}
                      value="checked"
                    />
                  ) : (
                    <input
                      className="toggle"
                      type="checkbox"
                      data-key={todo.id}
                      onChange={toggleCheckStatus}
                    />
                  )}
                  <label>{todo.todoText}</label>
                  <button
                    className="destroy"
                    data-key={todo.id}
                    onClick={removeTodoItem}
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default List;
