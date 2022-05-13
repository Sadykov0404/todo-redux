import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";

const TodoItem = ({ todo, index }) => {
  const date = new Date();
  const [minute, setMinute] = useState("");
  const [hours, setHours] = useState("");
  const [terms, setTerms] = useState(0);
  const [task, setTask] = useState(false);
  // const [real, setReal] = useState(false);
  useEffect(() => {
    setMinute((date.getMinutes() < 10 ? 0 : "") + date.getMinutes());
    setHours((date.getHours() < 10 ? 0 : "") + date.getHours());
    setTerms(hours + minute);
  }, []);
  // setTimeout(() => {
  //   setTerms(hours + minute);
  // }, 1000);
  let dispatch = useDispatch();
  let newTerm = todo.term.replace(":", "");

  console.log("test");
  return (
    <div className={task ? "bg-green-500	" : ""}>
      <div className="flex items-center p-3 justify-between">
        <input type="checkbox" onClick={() => setTask(!task)} />
        <div className="font-semibold">№{index}</div>
        <div className="w-100">{todo.title}</div>
        <p>Created: {todo.date}</p>
        <div>
          {/* {newTerm <= terms ? <p>Srok tugadi</p> : <p>Term: {todo.term}</p>} */}
          {newTerm < terms || newTerm === terms ? (
            <p>block</p>
          ) : (
            <p>{todo.term}</p>
          )}
        </div>

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-600 px-3 py-2 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
