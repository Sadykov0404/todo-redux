import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state);

  let newDate = new Date().toLocaleString(),
    timeDataNew = newDate.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const [newArr, setNewArr] = useState([]);

  function scanArray() {
    todos.filter((item) => {
      if (item.term < timeDataNew) {
        return item.term
      } else if (item.term === timeDataNew) {
        item.term = "rovna";
      } else {
        return item;
      }

      return setNewArr(newArr);
    });
  }

  console.log(timeDataNew.slice(12));
  return (
    <>
      <div className="border-2 mt-3">
        {todos?.map((todo, i) => {
          return <TodoItem key={todo.id} todo={todo} index={i + 1} />;
        })}
      </div>
      <button onClick={scanArray()}>refresh</button>
    </>
  );
};

export default TodoList;
