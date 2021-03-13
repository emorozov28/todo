import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleteItem, onToggleDone, onToggleImportant }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} id={id} className="list-group-item">
        <TodoListItem {...itemProps}
          onDeleteItem={() => onDeleteItem(id) }
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements}
    </ul>
  );
};

export default TodoList;
