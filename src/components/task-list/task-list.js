import React from 'react';
import './task-list.css';

import Task from '../task';

const TaskList = ( { todos, itemDestroy } ) => {
    const items = todos.map((item) => {
        const {id, ...props } = item;
        return <Task key={id} {...props} itemDestroy={() => itemDestroy(id)} />
    });



    return (
        <ul className="todo-list">
            {items}
        </ul>
    );
};

export default TaskList;