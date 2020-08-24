import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <ul>
      {
        props.todos.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            index={index}
            toggleDone={props.toggleDone}
            removeTodo={props.removeTodo}
          />
        ))
      }
    </ul>
  );
}

export default TodoList;