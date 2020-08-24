import React from 'react';

const Todo = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={props.toggleDone(props.todo, props.index)}
      />
      <span className={props.todo.done ? 'done' : ''}>
        {props.todo.content}
      </span>
      <button
        className="removeTodo"
        onClick={props.removeTodo(props.todo, props.index)}>x
      </button>
    </li>
  );
}

export default Todo;