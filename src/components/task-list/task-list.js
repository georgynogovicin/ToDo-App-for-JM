import React from 'react';
import './task-list.css';

import Task from '../task';

const TaskList = ( { todos } ) => {
    const items = todos.map((item) => {
        return <Task {...item} />
    });

    return (
        <ul className="todo-list">
            {items}
        </ul>
    );
};

export default TaskList;