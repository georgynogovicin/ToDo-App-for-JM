import React, { Component } from 'react';
import "./new-task-form.css";

export default class NewTaskForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onKeyDown = (event) => {
        if (event.code === 'Enter') {
            if (this.state.label !== '') {
                this.props.addItem(this.state.label);
                this.setState({
                label: ''
            })
            }
        }
    };


    render () {

        return (
            <input className="new-todo" 
                    placeholder='What needs to be done?' 
                    autoFocus
                    onChange={this.onLabelChange}
                    onKeyDown={this.onKeyDown}
                    value={ this.state.label }
                    >
                        
                    </input>
        );
    };
};
