import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './app.css';

import Header from '../header';
import TaskList from '../task-list';
import Footer from '../footer';

const App = () => {
    
    const todoData = [
        {label: 'Completed', status: 'completed', addingDate: formatDistanceToNow(new Date()), key: 1},
        {label: 'Editing', status: 'editing', addingDate: formatDistanceToNow(new Date()), key: 2},
        {label: 'Active', addingDate: formatDistanceToNow(new Date()), key: 3},
    ];
    return (
        <section className="todoapp">
            <Header />
            <section className="main">
                <TaskList todos={todoData} />
            </section>
            <Footer />
        </section>
    );
};

export default App;