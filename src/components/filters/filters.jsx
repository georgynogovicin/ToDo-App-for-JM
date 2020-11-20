import React, { Component } from 'react';
import PropTypes from 'prop-types';
import values from '../../helpers/values';

import './filters.css';

export default class Filters extends Component {
  static propTypes = {
    filterValue: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };

  onFilterClick = (event) => {
    const { changeFilter } = this.props;
    changeFilter(event.target.dataset.value);
  };

  render() {
    const { filterValue } = this.props;

    return (
      <ul className="filters" onClick={this.onFilterClick} onKeyDown={() => {}} role="presentation">
        <li>
          <button
            type="button"
            className={filterValue === values.filters.all ? 'selected' : ''}
            data-value={values.filters.all}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filterValue === values.filters.active ? 'selected' : ''}
            data-value={values.filters.active}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filterValue === values.filters.completed ? 'selected' : ''}
            data-value={values.filters.completed}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
