import React from 'react';
import PropTypes from 'prop-types';
import values from '../../helpers/values';

import './filters.css';

function Filters({ changeFilter, filterValue }) {
  const onFilterClick = (event) => {
    changeFilter(event.target.dataset.value);
  };
  return (
    <ul className="filters" onClick={onFilterClick} onKeyDown={() => {}} role="presentation">
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

Filters.propTypes = {
  filterValue: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filters;
