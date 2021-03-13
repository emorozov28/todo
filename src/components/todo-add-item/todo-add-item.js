import React, { Component } from 'react';

import './todo-add-item.css';

export default class todoAddItem extends Component {

    render() {

        const { onAddItem } = this.props;
        return (
            <div className="todo-add-item d-flex">
                <input className="form-control add-input" placeholder="add list" />
                <button 
                    className="btn btn-info"
                    onClick={() => onAddItem('hello word')}
                >Add</button>
            </div>
        );
    }
}