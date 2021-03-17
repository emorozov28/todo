import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({label, done, important, onDeleteItem, onToggleDone, onToggleImportant}) => {

    let classNames = 'todo-list-item';
    let activeBtnClass = 'btn-outline-success';

    if(done) {
      classNames += ' done';
    }
    
    if(important) {
      activeBtnClass = ' btn-success';
      classNames += ' important';
    }

    return (
      <div className={classNames}>
        <span
          onClick={onToggleDone}
          className="todo-list-item-label"
        >
          {label}
        </span>

        <button type="button"
          className={['btn btn-sm float-right', activeBtnClass].join(' ')}
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleteItem}
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    );
  }

export default TodoListItem;


