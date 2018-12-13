import React, { Component } from 'react';
import logo from './logo.svg';
import * as style from './App.module.css';
import * as Api from './Api';

class App extends Component {
  state = {
    todos: [],
    inputText: '',
  };

  onInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  addTodo = () => {
    const { todos } = this.state;
    const newTodos = [ ...todos, this.state.inputText];
    this.setState({
      inputText: '',
      todos: newTodos
    });
  }

  removeTodo = (todo) => {
    // TODO step 2: remove incoming todo from state
  }

  render() {
    return (
      <div className={style.App}>
        <div className={style['App-header__title']}>
          Todo app
        </div>
        <div className={style['App-header__symbol']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
        </div>
        <div className={style.content}>
        <div>
          <input type="text" value={this.state.inputText} onChange={this.onInputChange} />
          <button type="button" onClick={this.addTodo}>add me</button>
        </div>
        {this.state.todos.map(todo => (<div key={todo}>{todo}</div>))}
        </div>
      </div>
    );
  }
}

export default App;
