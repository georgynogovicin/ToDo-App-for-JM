import React from 'react';
import './footer.css';

import Filters from '../filters';

const Footer = (props) => {
    
    const { todoCount } = props;
    return (
        <footer className="footer">
          <span className="todo-count">{ todoCount } items left</span>
          <Filters />
          <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Footer;