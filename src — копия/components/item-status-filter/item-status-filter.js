import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    { label: 'All', name: 'all' },
    { label: 'Active', name: 'active' },
    { label: 'Done', name: 'done' },
  ]
  render() {
    const buttons = this.buttons.map((item) => {
      const isActive = this.props.filter === item.name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      
      return <button type="button"
        className={`btn ${clazz}`}
        key={item.name}
        onClick={() => this.props.onFilterChange(item.name)}
      >{item.label}</button>
    });


    return (
      <div className="btn-group">
        { buttons}
      </div>
    );
  }
}

