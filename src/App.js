import React, { useState, useCallback } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    if (!newTodo.trim())
      return;
    setTodos(
      [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          content: newTodo,
          done: false
        }
      ]
    );
    setNewTodo('');
  }, [todos, newTodo]);

  const toggleDone = useCallback((todo, index) => () => {
    const newTodos = [...todos]; // Create a copy of the array containing the todos.
    // if const a = array it would create a pointer to the same array. Reference.
    // Instead using a spread operator creates a copy.
    // Removes the todo from the array and replaces it with a copy modified.
    newTodos.splice(index, 1, {
      ...todo,
      done: !todo.done
    });
    setTodos(newTodos);
  }, [todos]);

  const removeTodo = useCallback((_, index) => () => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }, [todos]);

  const markAllDone = useCallback(() => {
    const updatedTodos = todos.map((todo) => (
      {
        ...todo,
        done: true
      }
    ));
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <div id="app">
      <h2>Todo List App</h2>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newTodo">Enter a todo</label>
        <input
          id="newTodo"
          name="newTodo"
          value={newTodo}
          onChange={onNewTodoChange}
        />
        <button
          type="submit"
          id="addTodo">
          Add Todo
        </button>
      </form>
      <button
        id="allDone"
        onClick={markAllDone}>Mark all as Done
      </button>
      <TodoList
        todos={todos}
        toggleDone={toggleDone}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
