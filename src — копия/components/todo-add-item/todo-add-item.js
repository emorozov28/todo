import React, { Component } from 'react';

import './todo-add-item.css';

export default class todoAddItem extends Component {

    state = {
        label: ''
    }

    onChangeLabel = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onAddItem = (e) => {
        e.preventDefault();
        if (this.state.label !== '') {
            this.props.onAddItem(this.state.label);
            this.setState({
                label: ''
            });
        }
    }

    render() {
        return (
            <form className="todo-add-item d-flex" onSubmit={this.onAddItem}>
                <input className="form-control add-input"
                    onChange={this.onChangeLabel}
                    placeholder="add list"
                    value={this.state.label} />
                <button
                    className="btn btn-info"
                >Add</button>
            </form>
        );
    }
}