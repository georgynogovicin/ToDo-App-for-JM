import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './filters.css';

export default class Filters extends Component {

    
    static defaultProps = {
        filterValue: 'All',
        changeFilter: () => {},
    };

    static propTypes = {
        filterValue: PropTypes.string,
        changeFilter: PropTypes.func.isRequired
    };


    onFilterClick = (event) => {
        this.props.changeFilter(event.target.dataset.value);
    }

    render() {
        const { filterValue } = this.props;
        
        return (
            <ul className="filters"
                onClick={ this.onFilterClick }
            >
                <li>
                    <button className={filterValue === "All" ? "selected" : ""} data-value="All">All</button>
                </li>
                <li>
                    <button className={filterValue === "Active" ? "selected" : ""} data-value="Active">Active</button>
                </li>
                 <li>
                    <button className={filterValue === "Completed" ? "selected" : ""} data-value="Completed">Completed</button>
                </li>
            </ul>
        );
    };
};




