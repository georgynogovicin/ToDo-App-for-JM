import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import TaskList from '../task-list';
import Footer from '../footer';

export default class App extends Component {
  currentId = 100;

  state = {
    todoData: [this.createTodoItem('Completed'), this.createTodoItem('Editing'), this.createTodoItem('Active')],
    filterValue: 'All',
  };

  changeFilter = (filter) => {
    this.setState({
      filterValue: filter,
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  itemDestroy = (id) => {
    this.setState(({ todoData }) => {
      const result = todoData.reduce((acc, item) => {
        if (item.id !== id) {
          acc.push(item);
        }
        return acc;
      }, []);
      return {
        todoData: result,
      };
    });
  };

  itemEdit = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, editing: !oldItem.editing };

      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  clearComplete = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((item) => !item.done);

      return {
        todoData: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  createTodoItem(label) {
    return {
      label,
      addingDate: new Date(),
      id: this.currentId + Math.floor(Math.random() * 100),
      done: false,
      editing: false,
    };
  }

  render() {
    const { todoData, filterValue } = this.state;
    const todoCount = todoData.length - todoData.filter((item) => item.done).length;

    return (
      <section className="todoapp">
        <Header addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={todoData}
            filterValue={filterValue}
            itemDestroy={this.itemDestroy}
            onToggleDone={this.onToggleDone}
            itemEdit={this.itemEdit}
          />
        </section>
        <Footer
          todoCount={todoCount}
          clearComplete={this.clearComplete}
          changeFilter={this.changeFilter}
          filterValue={filterValue}
        />
      </section>
    );
  }
}
