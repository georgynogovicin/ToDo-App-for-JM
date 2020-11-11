import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task';


export default class Task extends Component {

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
