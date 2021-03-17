import React from 'react';

import './TodoLIstItem.css'

const TodoLIstItem = ({ label, done, important, onToggleDone, onToggleImportant, onDeleteItems }) => {

    let classes = 'todo-list-item';
    if (done) classes += ' done';

    let classSpan = 'todo-list-item-label';
    let classBtn = 'btn-outline-success';
    if (important) {
        classes += ' important'
        classBtn = ' btn-success'
    };

    return (
        <div className={classes}>
            <span className={classSpan}
                onClick={onToggleDone}
            > {label} </span>
            <button type="button"
                className={`btn ${classBtn} btn-sm float-right`}
                onClick={onToggleImportant}
            >
                <i className="fa fa-exclamation" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm float-right" 
                onClick={onDeleteItems}
            >
                <i className="fa fa-trash-o" />
            </button>
        </div>
    );
}

export default TodoLIstItem;