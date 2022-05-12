import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/actions";

const TodoItem = ({ todo, index  }) => {
  let dispatch = useDispatch();
  return (
    <div className="todoItem my-1">
      <div class="card fs-5">
        <div class="d-flex p-3 align-items-center">
          <div className="fw-bold me-2">№{index}</div>
          <div className="w-100">{todo.title}</div>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
