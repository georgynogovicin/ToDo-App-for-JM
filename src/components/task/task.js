import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task';


export default class Task extends Component {


  state = {
    done: false
  }
  
  onDoneClick = () => {
    this.setState(({ done }) => {
      return { done: !done }
    });
  };


  render () {

    const { label, status, addingDate, id, itemDestroy } = this.props;
    const { done } = this.state;

    let taskClass = status;

    if (done) taskClass = 'completed';
     

    return (
        <li className={taskClass}>
            <div className="view">
              <input className="toggle" type="checkbox" onClick={this.onDoneClick}></input>
              <label>
                <span className="description">{label}</span>
                <span className="created">{formatDistanceToNow(addingDate)}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"
                      onClick={() => itemDestroy(id)}
                      ></button>
            </div>
            { status === 'editing' ? <input type="text" className="edit" defaultValue={label}></input> : null }
          </li>
    );
  };
};
