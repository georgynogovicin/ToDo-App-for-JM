import React from 'react';
import './task-list.css';
import PropTypes from 'prop-types';
import values from '../../helpers/values';

import Task from '../task';

const TaskList = ({ todos, itemDestroy, onToggleDone, itemEdit, filterValue }) => {
  const filter = (val) => {
    switch (val) {
      case values.filters.active:
        return todos.filter((item) => !item.done);

      case values.filters.completed:
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
        id={id}
        {...props}
        itemDestroy={() => itemDestroy(id)}
        onToggleDone={() => onToggleDone(id)}
        itemEdit={() => itemEdit(id)}
      />
    );
  });

  return <ul className="todo-list">{items}</ul>;
};

TaskList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  itemDestroy: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  itemEdit: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default TaskList;
