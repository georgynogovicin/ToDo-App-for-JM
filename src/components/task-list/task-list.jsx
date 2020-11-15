import React from 'react';
import './task-list.css';
import PropTypes from 'prop-types';

import Task from '../task';

const TaskList = ({ todos, itemDestroy, onToggleDone, itemEdit, filterValue }) => {
  const filter = (val) => {
    switch (val) {
      case 'Active':
        return todos.filter((item) => !item.done);

      case 'Completed':
        return todos.filter((item) => item.done);

      default:
        return todos;
    }
  };

  const filteredArr = filter(filterValue);

  const items = filteredArr.map((item) => {
    const { id, ...props } = item;
    return (
      <Task
        key={id}
        {...props}
        itemDestroy={() => itemDestroy(id)}
        onToggleDone={() => onToggleDone(id)}
        itemEdit={() => itemEdit(id)}
      />
    );
  });

  return <ul className="todo-list">{items}</ul>;
};

TaskList.defaultProps = {
  id: 0,
  filterValue: 'All',
  label: 'Active',
};

TaskList.propTypes = {
  id: PropTypes.number,
  todos: PropTypes.instanceOf(Array).isRequired,
  itemDestroy: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  itemEdit: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
  label: PropTypes.string,
};

export default TaskList;
