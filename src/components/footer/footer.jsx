import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';

import Filters from '../filters';

const Footer = ({ todoCount, clearComplete, changeFilter, filterValue }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <Filters changeFilter={changeFilter} filterValue={filterValue} />
      <button type="button" className="clear-completed" onClick={() => clearComplete()}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  todoCount: PropTypes.number.isRequired,
  clearComplete: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Footer;
