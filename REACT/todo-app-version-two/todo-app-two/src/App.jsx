import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItemsContextProvider from "./components/todo-item-store";



function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AppTodo />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
