import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import TaskList from '../task-list';
import Footer from '../footer';
import values from '../../helpers/values';

export default class App extends Component {
  currentId = 100;

  state = {
    todoData: [
      this.createTodoItem('Добавить задачу'),
      this.createTodoItem('Отметить задачу'),
      this.createTodoItem('Удалить задачу'),
    ],
    filterValue: values.filters.all,
  };

  changeFilter = (filter) => {
    this.setState(() => {
      return {
        filterValue: filter,
      };
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
      const result = todoData.filter((item) => {
        return item.id !== id;
      });
      return {
        todoData: result,
      };
    });
  };

  toggleItemValue = (id, key, dataArr) => {
    const idx = dataArr.findIndex((item) => item.id === id);
    const oldItem = dataArr[idx];
    const newItem = { ...oldItem, [key]: !oldItem[key] };
    return [...dataArr.slice(0, idx), newItem, ...dataArr.slice(idx + 1)];
  };

  itemEdit = (id) => {
    this.setState(({ todoData }) => {
      const newArr = this.toggleItemValue(id, values.status.editing, todoData);

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
      const newArr = this.toggleItemValue(id, values.status.done, todoData);

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
