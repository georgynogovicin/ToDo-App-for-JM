import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';

function Header({ addItem }) {
  const [label, setLabel] = useState('');

  function onKeyDown(event) {
    if (event.code === 'Enter') {
      if (label !== '') {
        addItem(label);
        setLabel('');
      }
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          onChange={(event) => setLabel(event.target.value)}
          onKeyDown={onKeyDown}
          value={label}
        />
        <input className="new-todo-form__timer" placeholder="Min" />
        <input className="new-todo-form__timer" placeholder="Sec" />
      </form>
    </header>
  );
}

Header.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Header;
