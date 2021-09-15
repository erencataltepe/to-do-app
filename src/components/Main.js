import { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function Main() {
  const [todo, setTodoText] = useState({
    todoText: "",
    isCompleted: false,
    id: undefined,
  });
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleTodoText = (e) => {
    setTodoText({ ...todo, todoText: e.target.value, isCompleted: false });
  };

  const addNewItem = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { todoText: todo.todoText, isCompleted: false, id: +new Date() },
    ]);
  };

  const removeTodoItem = (e) => {
    const removeTodoId = e.target.dataset.key;
    const newTodoList = todoList.filter((todo) => {
      return String(todo.id) !== removeTodoId;
    });
    setTodoList(newTodoList);
  };

  const toggleCheckStatus = (e) => {
    const toggleTodoId = e.target.dataset.key;
    const newTodoList = todoList.map((todo) => {
      if (String(todo.id) === toggleTodoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const removeCompletedTodos = () => {
    const newTodoList = todoList.filter((todo) => !todo.isCompleted);
    setTodoList(newTodoList);
  };

  const filterList = (filter) => {
    switch (filter) {
      case "all":
        return todoList;
      case "completed":
        return todoList.filter((todo) => todo.isCompleted);
      case "active":
        return todoList.filter((todo) => !todo.isCompleted);
      default:
        return todoList;
    }
  };

  const changeFilter = (e) => {
    setFilter(e.target.name);
  };

  useEffect(() => {
    setTodoText({ todoText: "", isCompleted: false });
  }, [todoList]);

  return (
    <section className="todoapp">
      <Header
        todo={todo}
        handleTodoText={handleTodoText}
        addNewItem={addNewItem}
      />
      <List
        todoList={filterList(filter)}
        removeTodoItem={removeTodoItem}
        toggleCheckStatus={toggleCheckStatus}
      />
      <Footer
        todoList={todoList}
        removeCompletedTodos={removeCompletedTodos}
        changeFilter={changeFilter}
      />
    </section>
  );
}

export default Main;
