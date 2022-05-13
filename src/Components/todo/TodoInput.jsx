import React, { useEffect, useState } from "react";
import { addTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";

const TodoInput = () => {
  let dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [term, setTerm] = useState("");
  let [minute, setMinute] = useState("");
  const data = new Date();
  useEffect(() => {
    setMinute(
      (data.getHours() < 10 ? "0" : "") +
        data.getHours().toString() +
        ":" +
        ((data.getMinutes() < 10 ? "0" : "") + data.getMinutes().toString())
    );
  }, [minute]);
  return (
    <div className="d-flex input-group">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Please type your todo.."
        className="p-3 focus:outline-none border-2"
      />
      <input
        type="time"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Please type your time"
        className="p-3 focus:outline-none border-2"
      />
      <button
        onClick={() => {
          if (title) {
            dispatch(
              addTodo({
                id: uuid(),
                title: title,
                date: minute,
                term: term,
              })
            );
            setTerm("");
            setTitle("");
            setMinute("");
          }
        }}
        className="p-3 bg-sky-900 text-white"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
