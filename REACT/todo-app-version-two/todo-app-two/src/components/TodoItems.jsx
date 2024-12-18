import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "./todo-item-store";

const TodoItems = () => {

  const { todoItems  } = useContext (TodoItemsContext);
  
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key = {item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
