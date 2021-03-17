import React from 'react';
import TodoListItem from '../TodoLIstItem/TodoLIstItem';

import './TodoLIst.css'

const TodoLIst = ({ todos, onToggleDone, onToggleImportant, onDeleteItems }) => {

    const TodoLIst = todos.map(item => {
        const { id, ...todos } = item;
        return (
            <li className="list-group-item"
                key={id} id={id}>
                <TodoListItem 
                    {...todos} 
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onDeleteItems={() => onDeleteItems(id)}
            /></li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { TodoLIst}
        </ul>
    )
}

export default TodoLIst;