import React from 'react';
import './task';

const Task = ({ label, status, addingDate }) => {

    if (status === 'editing') {
      return (
        <li className={status}>
            <div className="view">
              <input className="toggle" type="checkbox"></input>
              <label>
                <span className="description">{label}</span>
                <span className="created">{addingDate}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task"></input>
          </li>
      );
    };

    return (
        <li className={status}>
            <div className="view">
              <input className="toggle" type="checkbox"></input>
              <label>
                <span className="description">{label}</span>
                <span className="created">{addingDate}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
          

    );
}

export default Task;