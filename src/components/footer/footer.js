import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';

import Filters from '../filters';

const Footer = ({ todoCount, clearComplete, changeFilter, filterValue }) => {
    return (
        <footer className="footer">
          <span className="todo-count">{ todoCount } items left</span>
          <Filters changeFilter={ changeFilter } filterValue={ filterValue } />
          <button className="clear-completed"
                  onClick={ () => clearComplete() } >Clear completed</button>
        </footer>
    );
};


Footer.defaultProps = {
    todoCount: 0,
    clearComplete: () => {},
}

Footer.propTypes = {
    todoCount: PropTypes.number,
    clearComplete: PropTypes.func.isRequired,
}

export default Footer;