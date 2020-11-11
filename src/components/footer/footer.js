import React from 'react';
import './footer.css';

import Filters from '../filters';

const Footer = ({ todoCount, clearComplete, changeFilter }) => {
    
    return (
        <footer className="footer">
          <span className="todo-count">{ todoCount } items left</span>
          <Filters changeFilter={ changeFilter }/>
          <button className="clear-completed"
                  onClick={ () => clearComplete() } >Clear completed</button>
        </footer>
    );
};

export default Footer;