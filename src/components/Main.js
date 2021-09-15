import { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function Main() {
  const [todo, setTodoText] = useState({ todoText: "", isCompleted: false });
  const [todoList, setTodoList] = useState([
    { todoText: "eren", isCompleted: false },
    { todoText: "nazlı", isCompleted: true },
  ]);

  const handleTodoText = (e) => {
    setTodoText({ todoText: e.target.value, isCompleted: false });
  };

  const addNewItem = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoText: todo.todoText, isCompleted: false }]);
  };

  const removeTodoItem = (e) => {
    const removeTodoId = e.target.dataset.key;
    const newTodoList = [...todoList];
    newTodoList.splice(removeTodoId, 1);
    setTodoList(newTodoList);
  };

  const toggleCheckStatus = (e) => {
    const toggleTodoId = e.target.dataset.key;
    const newTodoList = [...todoList];
    newTodoList[toggleTodoId].isCompleted =
      !newTodoList[toggleTodoId].isCompleted;
    setTodoList(newTodoList);
  };

  const removeCompletedTodos = () => {
    const newTodoList = todoList.filter((todo) => !todo.isCompleted);
    setTodoList(newTodoList);
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
        todoList={todoList}
        removeTodoItem={removeTodoItem}
        toggleCheckStatus={toggleCheckStatus}
      />
      <Footer todoList={todoList} removeCompletedTodos={removeCompletedTodos} />
    </section>
  );
}

export default Main;
