import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

const classNames = require('classnames');

const Task = ({ label, addingDate, id, done, editing, itemDestroy, onToggleDone, itemEdit }) => {
  const taskClass = classNames({
    '': true,
    completed: done,
    editing: editing,
  });

  return (
    <li className={taskClass}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={() => onToggleDone(id)} />
        <label>
          <span className="description">{label}</span>
          <span className="created">{formatDistanceToNow(addingDate)}</span>
        </label>
        <button type="button" aria-label="Edit" className="icon icon-edit" onClick={() => itemEdit(id)} />
        <button type="button" aria-label="Delete" className="icon icon-destroy" onClick={() => itemDestroy(id)} />
      </div>
      {editing ? <input type="text" className="edit" defaultValue={label} /> : null}
    </li>
  );
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  addingDate: PropTypes.instanceOf(Date).isRequired,
  itemDestroy: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  itemEdit: PropTypes.func.isRequired,
};

export default Task;
