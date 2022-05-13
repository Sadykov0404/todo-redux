import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state);
  return (
    <>
      <div className="border-2 mt-3">
        {todos?.map((todo, i) => {
          return <TodoItem key={todo.id} todo={todo} index={i + 1} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
