import { useReducer } from "react";
import { createContext  } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addnewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currentTodoItem, action) => {
  let newTodo = currentTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodo = [
      ...currentValue,
      {
        name: action.playload.itemName,
        dueDate: action.playload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodo = currentTodoItem.filter(
      (item) => item.name !== action.playload.itemName
    );
  }
  return newTodo;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoList] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      playload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoList(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      playload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoList(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
