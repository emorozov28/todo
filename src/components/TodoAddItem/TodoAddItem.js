import React, { Component } from 'react';

import './TodoAddItem.css'

export default class TodoAddItem extends Component {
    state = {
        label: ''
    }

    textItem = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    addItems = (e) => {
        e.preventDefault();
        const { label } = this.state;
        if (label !== '' && label.length !== 0) {
            this.props.onAddItem(label);
            this.setState({
                label: ''
            })
        }
    }


    render() {
        return (
            <form className="todo-add-item d-flex" onSubmit={this.addItems}>
                <input className="form-control add-input"
                    placeholder="add list"
                    onChange={this.textItem}
                    value={this.state.label}
                />
                <button
                    className="btn btn-outline-info"
                >Add</button>
            </form>
        )
    }
}