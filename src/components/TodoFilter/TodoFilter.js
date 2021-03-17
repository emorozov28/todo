import React, { Component } from 'react';

import './TodoFilter.css'

export default class TodoFilter extends Component {
    
    buttons = [
        {label: 'All', name: 'all'},
        {label: 'Active', name: 'active'},
        {label: 'Done', name: 'done'},
    ]
    
    render() {

        const buttons = this.buttons.map(el => {
            const classBtn = this.props.filter === el.name ? 'btn-info' : 'btn-outline-info'; 
            return (
                <button type="button" 
                    className={`btn ${classBtn}`} 
                    key={el.name}
                    onClick={()=> this.props.onFilterChange(el.name)}
                >{el.label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}