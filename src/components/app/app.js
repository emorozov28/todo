import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAddItem from '../todo-add-item/';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', done: false, important: false, id: 1 },
      { label: 'Make Awesome App', done: false, important: true, id: 2 },
      { label: 'Have a lunch', done: false, important: false, id: 3 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=> el.id === id)

      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newTodoData
      }

    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({todoData})=> {
      
      const newTodoData = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newTodoData
      }
    })
  }

  onToggleDone = (id) => {
    console.log('done ', id);
    // this.setState(()=>{

    //   todoData
    // });

  }
  
  onToggleImportant = (id) => {
    console.log('important ', id);
  }

  render() {
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <TodoAddItem  onAddItem={this.addItem} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </div>
    );
  }
};