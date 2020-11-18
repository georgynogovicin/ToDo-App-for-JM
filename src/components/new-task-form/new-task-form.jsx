import React, { Component } from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
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
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={this.onLabelChange}
        onKeyDown={this.onKeyDown}
        value={label}
      />
    );
  }
}
