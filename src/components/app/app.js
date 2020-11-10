import React, { Component } from 'react';


import './app.css';

import Header from '../header';
import TaskList from '../task-list';
import Footer from '../footer';

export default class App extends Component {
    
    state = {
        todoData: [
            {label: 'Completed', addingDate: new Date(), id: 1},
            {label: 'Editing', status: 'editing', addingDate: new Date(), id: 2},
            {label: 'Active', addingDate: new Date(), id: 3},
        ]
    };

    itemDestroy = (id) => {
        this.setState(({todoData}) => {
            const result = todoData.reduce((acc, item) => {
                if (item.id !== id) {
                    acc.push(item);
                }
                return acc;
            }, []);
            return {
                todoData: result
            };
        })
    }

    render() {
        const { todoData } = this.state;
        return <section className="todoapp">
            <Header />
            <section className="main">
                <TaskList todos={todoData} itemDestroy={this.itemDestroy} />
            </section>
            <Footer />
        </section>
    };
};