import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import TodoAddItem from '../TodoAddItem/TodoAddItem';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoLIst from '../TodoLIst/TodoLIst';

import './App.css'
import TodoFilter from '../TodoFilter/TodoFilter';

export default class App extends Component {
    idElem = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('travel by car'),
            this.createTodoItem('drink tea')
        ],

        term: '',
        filter: 'all'
    }



    onToggleDone = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.changeStateItems(todoData, id, 'done')
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.changeStateItems(todoData, id, 'important')
            }
        });
    }

    changeStateItems(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]

    }

    onDeleteItems = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }
        });
    }

    onAddItem = (label) => {
        this.setState(({ todoData }) => {

            const newTodoData = [
                ...todoData,
                this.createTodoItem(label)

            ];

            return {
                todoData: newTodoData
            }
        });
    }

    createTodoItem(label) {
        return { label, important: false, done: false, id: this.idElem++ }
    }

    search(items, term) {
        if(term.length === 0) return items;

        return items.filter(el => el.label.toUpperCase().indexOf(term.toUpperCase()) > -1);
    }


    onSearchItem = (term) => {
        this.setState({ term });
    }

    filter(items, filter) {

        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter(el => !el.done);
            case 'done':
                return items.filter(el => el.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter) =>{
        this.setState({ filter });
    }


    render() {
        const { todoData, term, filter } = this.state;

        const todoElement = todoData.filter(el => !el.done).length;
        const todoDone = todoData.filter(el => el.done).length;

        const visibleContent = this.filter(this.search(todoData, term), filter);

        return (
            <div className="todo-app">
                <AppHeader todo={todoElement} done={todoDone} />
                <TodoAddItem
                    onAddItem={this.onAddItem}
                />
                <div className="d-flex">
                    <TodoSearch onSearchItem ={this.onSearchItem}/>
                    <TodoFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoLIst
                    todos={visibleContent}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                    onDeleteItems={this.onDeleteItems}
                />
            </div>
        )
    }
}