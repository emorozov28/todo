import React, { Component } from 'react';

import './TodoSearch.css'

export default class TodoSearch extends Component {

    state = {
        term: ''
    }

    onChangeItem = (e) => {
        let term = e.target.value;
        this.setState({ term });
        this.props.onSearchItem(term);
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.term}
                onChange={this.onChangeItem}
            />
        )
    }
}