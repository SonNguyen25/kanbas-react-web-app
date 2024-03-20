import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm(

) {
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))}> Add </button>
      <button onClick={() => dispatch(updateTodo(todo))}> Update </button>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
export default TodoForm;

// import useSelector, useDispatch
// to read/write to reducer
// reducer functions


// remove dependency from
// parent component



// retrieve todo from reducer
// create dispatch instance to invoke
// reducer functions

// wrap reducer functions
// with dispatch


// wrap reducer functions
// with dispatch

