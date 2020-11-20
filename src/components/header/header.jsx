import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

export default class Header extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onKeyDown = (event) => {
    const { label } = this.state;
    const { addItem } = this.props;
    if (event.code === 'Enter') {
      if (label !== '') {
        addItem(label);
        this.setState({
          label: '',
        });
      }
    }
  };

  render() {
    const { label } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          onKeyDown={this.onKeyDown}
          value={label}
        />
      </header>
    );
  }
}
