import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';



export default class Task extends Component {


  static defaultProps = {
    label: 'Active',
    id: 0,
    done: false,
    editing: false,
    addingDate: new Date(),
    itemDestroy: () => {},
    onToggleDone: () => {},
    itemEdit: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    id: PropTypes.number,
    done: PropTypes.bool,
    editing: PropTypes.bool,
    addingDate: PropTypes.instanceOf(Date),
    itemDestroy: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    itemEdit: PropTypes.func.isRequired,
  };

  render () {
    
    const { label, addingDate, id, done, editing, itemDestroy, onToggleDone, itemEdit } = this.props;

    let taskClass = null;

    if (done) taskClass = 'completed';
    if (editing) taskClass = 'editing';
     

    return (
        <li className={taskClass}>
            <div className="view">
              <input className="toggle" type="checkbox" 
                    onClick={() => onToggleDone(id)}
              ></input>
              <label>
                <span className="description">{label}</span>
                <span className="created">{formatDistanceToNow(addingDate)}</span>
              </label>
              <button className="icon icon-edit"
                      onClick={ () => itemEdit(id) }
              ></button>
              <button className="icon icon-destroy"
                      onClick={() => itemDestroy(id)}
                      ></button>
            </div>
            { editing ? <input type="text" className="edit" defaultValue={label}></input> : null }
          </li>
    );
  };
};
