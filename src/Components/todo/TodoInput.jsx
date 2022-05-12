import React, { useState } from "react";
import { addTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";

const TodoInput = () => {
  let [title, setTitle] = useState("");
  let dispatch = useDispatch();
  return (
    <div className="d-flex input-group">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Please type your todo.."
        className="form-control"
      />
      <button
        onClick={() => {
          if (title) {
            dispatch(
              addTodo({
                id: uuid(),
                title: title,
              })
            );
            setTitle("");
          }
        }}
        className="btn btn-info"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
