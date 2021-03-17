import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onSearchLabel = (e) => {
    let term = e.target.value;
    this.setState({
      term
    });
    this.props.onSearchItem(term);
  }

  render() {

    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchLabel}
      />

    );
  }
};