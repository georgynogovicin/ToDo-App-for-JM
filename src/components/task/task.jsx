import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

const Task = ({ label, addingDate, id, done, editing, itemDestroy, onToggleDone, itemEdit }) => {
  let taskClass = null;

  if (done) taskClass = 'completed';
  if (editing) taskClass = 'editing';

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

Task.defaultProps = {
  label: 'Active',
  id: 0,
  done: false,
  editing: false,
  addingDate: new Date(),
};

Task.propTypes = {
  label: PropTypes.string,
  id: PropTypes.number,
  done: PropTypes.bool,
  editing: PropTypes.bool,
  addingDate: PropTypes.instanceOf(Date),
  itemDestroy: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  itemEdit: PropTypes.func.isRequired,
};

export default Task;
